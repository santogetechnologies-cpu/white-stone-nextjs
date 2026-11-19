import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import WebSocket from 'ws';

const ARTIFACT_DIR = '/Users/ashlinjeshma/.gemini/antigravity/brain/f1d640da-2743-40fa-960f-1079fd939d9a';
const EDGE_BIN = '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge';

async function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

async function run() {
  const port = 9555;
  const edge = spawn(EDGE_BIN, [
    '--headless=new',
    '--remote-allow-origins=*',
    `--remote-debugging-port=${port}`,
    'about:blank',
  ]);

  try {
    await wait(2000);
    const json = await getJson(`http://127.0.0.1:${port}/json`);
    const page = json.find((t) => t.type === 'page') || json[0];
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise((r) => ws.on('open', r));

    let id = 1;
    function call(method, params = {}) {
      return new Promise((resolve, reject) => {
        const reqId = id++;
        const onMsg = (raw) => {
          const m = JSON.parse(raw);
          if (m.id === reqId) {
            ws.off('message', onMsg);
            if (m.error) reject(m.error);
            else resolve(m.result);
          }
        };
        ws.on('message', onMsg);
        ws.send(JSON.stringify({ id: reqId, method, params }));
      });
    }

    await call('Page.enable');
    await call('DOM.enable');

    const viewports = [
      { name: 'desktop_1440', width: 1440, height: 900 },
      { name: 'desktop_1200', width: 1200, height: 800 },
      { name: 'tablet_820', width: 820, height: 1180 },
      { name: 'tablet_768', width: 768, height: 1024 },
      { name: 'mobile_390', width: 390, height: 844 },
    ];

    for (const vp of viewports) {
      await call('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 2,
        mobile: vp.width < 768,
      });

      await call('Page.navigate', { url: 'http://127.0.0.1:3000/en' });
      await wait(1200);

      const evalRes = await call('Runtime.evaluate', {
        expression: `(() => {
          const header = document.querySelector('.header.ws-nav-header');
          const brand = document.querySelector('.brand');
          const navCenter = document.querySelector('.ws-nav-center');
          const topServices = document.querySelector('.ws-top-services');
          const locale = document.querySelector('.ws-locale');
          const navTools = document.querySelector('.ws-nav-tools');
          const menuBtn = document.querySelector('.ws-menu-button');

          const hRect = header ? header.getBoundingClientRect() : null;
          const bRect = brand ? brand.getBoundingClientRect() : null;
          const cRect = navCenter ? navCenter.getBoundingClientRect() : null;
          const sRect = topServices ? topServices.getBoundingClientRect() : null;
          const lRect = locale ? locale.getBoundingClientRect() : null;
          const tRect = navTools ? navTools.getBoundingClientRect() : null;
          const mRect = menuBtn ? menuBtn.getBoundingClientRect() : null;

          let centerMidX = null;
          let headerMidX = null;
          let viewportMidX = window.innerWidth / 2;
          if (hRect) headerMidX = hRect.left + hRect.width / 2;
          if (cRect && cRect.width > 0) centerMidX = cRect.left + cRect.width / 2;

          return {
            viewportWidth: window.innerWidth,
            header: hRect ? { left: Math.round(hRect.left), right: Math.round(hRect.right), width: Math.round(hRect.width), midX: headerMidX } : null,
            brand: bRect ? { left: Math.round(bRect.left), right: Math.round(bRect.right), width: Math.round(bRect.width) } : null,
            navCenter: cRect ? { left: Math.round(cRect.left), right: Math.round(cRect.right), width: Math.round(cRect.width), midX: centerMidX } : null,
            topServices: sRect ? { left: Math.round(sRect.left), right: Math.round(sRect.right), width: Math.round(sRect.width) } : null,
            locale: lRect ? { left: Math.round(lRect.left), right: Math.round(lRect.right), width: Math.round(lRect.width) } : null,
            menuBtn: mRect ? { left: Math.round(mRect.left), right: Math.round(mRect.right), width: Math.round(mRect.width) } : null,
            offsetFromHeaderCenter: (headerMidX !== null && centerMidX !== null) ? Number((centerMidX - headerMidX).toFixed(2)) : null,
            offsetFromViewportCenter: (centerMidX !== null) ? Number((centerMidX - viewportMidX).toFixed(2)) : null
          };
        })()`,
        returnByValue: true,
      });

      console.log(`\n=== Viewport: ${vp.name} (${vp.width}x${vp.height}) ===`);
      console.log(JSON.stringify(evalRes.result ? evalRes.result.value : evalRes, null, 2));

      // Capture header area screenshot
      const clipHeight = vp.width < 768 ? 160 : 130;
      const shot = await call('Page.captureScreenshot', {
        format: 'png',
        clip: { x: 0, y: 0, width: vp.width, height: clipHeight, scale: 1 },
      });
      fs.writeFileSync(`${ARTIFACT_DIR}/navbar_${vp.name}.png`, Buffer.from(shot.data, 'base64'));
    }

    ws.close();
  } finally {
    edge.kill();
  }
}

run().catch(console.error);
