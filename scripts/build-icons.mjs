/**
 * Generate favicon PNGs + a 1200x630 social share image (og-image.png)
 * from the brand compass mark. Run with the preview server up:
 *   python3 -m http.server 8787 --bind 127.0.0.1 &
 *   node scripts/build-icons.mjs
 */
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = process.env.BASE_URL || 'http://127.0.0.1:8787';
const browser = await chromium.launch();

const MARK = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#12161d"/>
  <circle cx="50" cy="50" r="34" fill="none" stroke="#bf9b56" stroke-width="2" opacity=".42"/>
  <path d="M50 15 L60 50 L50 85 L40 50 Z" fill="#bf9b56"/>
  <path d="M15 50 L50 40 L85 50 L50 60 Z" fill="#bf9b56" opacity=".45"/>
  <path d="M50 15 L55 50 L50 50 Z" fill="#efe6d0"/>
  <circle cx="50" cy="50" r="4.5" fill="#a03325"/></svg>`;

const icons = [
  { file: 'favicon-96.png', size: 96 },
  { file: 'apple-touch-icon.png', size: 180 },
  { file: 'icon-192.png', size: 192 },
  { file: 'icon-512.png', size: 512 },
];
for (const { file, size } of icons) {
  const page = await (await browser.newContext({ viewport: { width: size, height: size } })).newPage();
  await page.setContent(`<style>*{margin:0;padding:0}html,body{width:${size}px;height:${size}px}svg{width:${size}px;height:${size}px;display:block}</style>${MARK}`);
  await page.screenshot({ path: join(root, file), type: 'png' });
  await page.close();
  console.log(`  ✓ ${file} (${size}×${size})`);
}

// ---- 1200x630 social share image ----
const og = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;1,9..144,400&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{width:1200px;height:630px;background:#12161d;overflow:hidden;position:relative;font-family:'Fraunces',serif;color:#f2efe6}
.tex{position:absolute;inset:0;background:linear-gradient(90deg,#12161d 34%,rgba(18,22,29,.55) 100%),url('${BASE}/assets/hero-bg.jpg');background-size:cover;background-position:center;opacity:.5;filter:blur(2px)}
.pad{position:absolute;inset:0;padding:72px 84px;display:flex;flex-direction:column;justify-content:space-between;z-index:2}
.top{display:flex;align-items:center;gap:18px}
.top svg{width:52px;height:52px}
.wm{font-weight:600;font-size:30px;letter-spacing:.2em}
.deg{color:#bf9b56;font-size:.7em;vertical-align:.5em}
.tag{font-family:'IBM Plex Mono',monospace;font-size:15px;letter-spacing:.26em;text-transform:uppercase;color:#bf9b56;margin-bottom:22px}
.head{font-weight:500;font-size:66px;line-height:1.03;letter-spacing:-.02em;max-width:16ch}
.head em{font-style:italic;font-weight:400;color:#bf9b56}
.rule{width:70px;height:2px;background:#a03325;margin-top:30px}
</style></head>
<body>
<div class="tex"></div>
<div class="pad">
  <div class="top">
    <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="none" stroke="#bf9b56" stroke-width="1.4" opacity=".5" stroke-dasharray="1.5 4.5"/><path d="M50 12 L60 50 L50 88 L40 50 Z" fill="#bf9b56"/><path d="M50 12 L55 50 L50 50 Z" fill="#efe6d0"/><line x1="50" y1="50" x2="72" y2="28" stroke="#a03325" stroke-width="3.5" stroke-linecap="round"/></svg>
    <span class="wm">AZIMUTH&nbsp;NORTH<span class="deg">&#176;</span></span>
  </div>
  <div>
    <div class="tag">Veteran-Led &middot; Consulting + AI Implementation</div>
    <div class="head">Software fitted to the terrain <em>you already operate on.</em></div>
    <div class="rule"></div>
  </div>
</div>
</body></html>`;

const po = await (await browser.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })).newPage();
await po.setContent(og, { waitUntil: 'networkidle' });
await po.evaluate(() => document.fonts.ready);
await po.waitForTimeout(600);
await po.screenshot({ path: join(root, 'og-image.png'), type: 'png' });
console.log('  ✓ og-image.png (1200×630)');

await browser.close();
console.log('Done.');
