
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function detectBlueShirts() {
  const dir = 'public/fotografie';
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.webp') || f.endsWith('.jpg'));
  
  console.log('Scanning for dark blue clothing...');
  for (const f of files) {
    const fp = path.join(dir, f);
    try {
      const { data, info } = await sharp(fp)
        .resize(300, 300, { fit: 'inside' })
        .raw()
        .toBuffer({ resolveWithObject: true });

      const { width, height, channels } = info;
      let bluePixels = 0;

      for (let i = 0; i < data.length; i += channels) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Dark blue shirt detection:
        // Blue dominant over Red and Green, but not light sky blue (not wall/sky):
        // r < 80, g < 100, b > 50, b > r + 30, b > g + 15
        if (b > 40 && b < 160 && (b - r) > 30 && (b - g) > 15 && r < 90) {
          bluePixels++;
        }
      }

      const pct = ((bluePixels / (width * height)) * 100).toFixed(1);
      if (bluePixels > 500) {
        console.log(`[BLUE DETECTED] ${f.padEnd(35)}: ${bluePixels} pixels (${pct}%)`);
      }
    } catch (e) {
      // ignore
    }
  }
}

detectBlueShirts().catch(console.error);
