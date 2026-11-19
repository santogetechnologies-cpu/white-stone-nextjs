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
  const port = 9561;
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
      { name: 'tablet_820', width: 820, height: 1180 },
      { name: 'mobile_390', width: 390, height: 844 },
    ];

    for (const vp of viewports) {
      await call('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 2,
        mobile: vp.width < 768,
      });

      await call('Page.navigate', { url: 'http://127.0.0.1:3000/en/shelf-services' });
      await wait(1200);

      // Open the first FAQ item
      await call('Runtime.evaluate', {
        expression: `(() => {
          const faqs = document.querySelectorAll('.ws-faq-item');
          if (faqs.length > 0) {
            faqs[0].open = true;
          }
        })()`,
      });
      await wait(300);

      // Get page coordinates of planning section
      const pRect = await call('Runtime.evaluate', {
        expression: `(() => {
          const el = document.querySelector('.ws-planning');
          const r = el.getBoundingClientRect();
          return {
            x: 0,
            y: Math.round(window.scrollY + r.top),
            width: window.innerWidth,
            height: Math.round(r.height)
          };
        })()`,
        returnByValue: true,
      });

      console.log(`[${vp.name}] Planning Rect:`, pRect.result.value);

      const pShot = await call('Page.captureScreenshot', {
        format: 'png',
        clip: { ...pRect.result.value, scale: 1 },
        captureBeyondViewport: true,
      });
      fs.writeFileSync(`${ARTIFACT_DIR}/shelf_planning_${vp.name}.png`, Buffer.from(pShot.data, 'base64'));

      // Get page coordinates of FAQ section
      const fRect = await call('Runtime.evaluate', {
        expression: `(() => {
          const el = document.querySelector('.ws-faq-wrap');
          const r = el.getBoundingClientRect();
          return {
            x: 0,
            y: Math.round(window.scrollY + r.top),
            width: window.innerWidth,
            height: Math.round(r.height)
          };
        })()`,
        returnByValue: true,
      });

      console.log(`[${vp.name}] FAQ Rect:`, fRect.result.value);

      const fShot = await call('Page.captureScreenshot', {
        format: 'png',
        clip: { ...fRect.result.value, scale: 1 },
        captureBeyondViewport: true,
      });
      fs.writeFileSync(`${ARTIFACT_DIR}/shelf_faq_${vp.name}.png`, Buffer.from(fShot.data, 'base64'));

      // Capture both sections combined
      const bothY = pRect.result.value.y;
      const bothHeight = (fRect.result.value.y + fRect.result.value.height) - bothY;
      const bShot = await call('Page.captureScreenshot', {
        format: 'png',
        clip: { x: 0, y: bothY, width: vp.width, height: bothHeight, scale: 1 },
        captureBeyondViewport: true,
      });
      fs.writeFileSync(`${ARTIFACT_DIR}/shelf_both_sections_${vp.name}.png`, Buffer.from(bShot.data, 'base64'));
    }

    ws.close();
  } finally {
    edge.kill();
  }
}

run().catch(console.error);
