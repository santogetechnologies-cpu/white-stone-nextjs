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

async function verify() {
  const port = 9546;
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
    await call('Runtime.enable');
    await call('DOM.enable');

    await call('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 950,
      deviceScaleFactor: 2,
      mobile: false,
    });

    // 1. Check Cleaning Page Card Hover State
    await call('Page.navigate', { url: 'http://127.0.0.1:3000/en/cleaning' });
    await wait(2200);

    // Scroll to expertise cards and hover over card 2
    const box2 = await call('Runtime.evaluate', {
      expression: `(() => {
        const el = document.querySelectorAll('.ws-expertise-card')[1];
        if (el) {
          const r = el.getBoundingClientRect();
          window.scrollTo({ top: r.top + window.scrollY - 80, behavior: 'instant' });
          return { x: r.left + r.width / 2, y: r.top + window.scrollY - 80 + r.height / 2 };
        }
        return null;
      })()`,
      returnByValue: true,
    });
    await wait(600);

    // Dispatch mouse move to hover card 2
    if (box2.value) {
      await call('Input.dispatchMouseEvent', {
        type: 'mouseMoved',
        x: 600,
        y: 400,
      });
      await wait(400);
    }

    const shot1 = await call('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(`${ARTIFACT_DIR}/hover_expertise_card.png`, Buffer.from(shot1.data, 'base64'));
    console.log('Saved hover_expertise_card.png');

    // 2. Check CTA section with hover on CTA card
    await call('Runtime.evaluate', {
      expression: `(() => {
        const el = document.querySelector('.ws-cta');
        if (el) {
          const r = el.getBoundingClientRect();
          window.scrollTo({ top: r.top + window.scrollY, behavior: 'instant' });
        }
      })()`,
    });
    await wait(600);

    await call('Input.dispatchMouseEvent', {
      type: 'mouseMoved',
      x: 1000,
      y: 450,
    });
    await wait(400);

    const shot2 = await call('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(`${ARTIFACT_DIR}/hover_cta_section.png`, Buffer.from(shot2.data, 'base64'));
    console.log('Saved hover_cta_section.png');

    // 3. Check Contact Page form hover & focus states
    await call('Page.navigate', { url: 'http://127.0.0.1:3000/en/kontakt' });
    await wait(2000);

    await call('Runtime.evaluate', {
      expression: `(() => {
        const input = document.querySelector('input[name="first"]');
        if (input) input.focus();
      })()`,
    });
    await wait(400);

    const shot3 = await call('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(`${ARTIFACT_DIR}/hover_contact_form.png`, Buffer.from(shot3.data, 'base64'));
    console.log('Saved hover_contact_form.png');

  } finally {
    edge.kill('SIGKILL');
  }
}

verify().catch(console.error);
