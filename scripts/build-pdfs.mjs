/**
 * Build branded PDF exports for every published article in articles.json.
 *
 * Usage:
 *   1) serve the site:  python3 -m http.server 8787 --bind 127.0.0.1
 *   2) run:             node scripts/build-pdfs.mjs
 *
 * Requires Playwright (npm i -D playwright && npx playwright install chromium).
 * Renders each /articles/<slug>.html using its print stylesheet and writes
 * /articles/<slug>.pdf with a branded header/footer + page numbers.
 */
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(readFileSync(join(root, 'articles.json'), 'utf8'));
const BASE = process.env.BASE_URL || 'http://127.0.0.1:8787';

const header = `<div style="width:100%;font-family:'Courier New',monospace;font-size:8px;letter-spacing:2px;color:#bf9b56;padding:0 54px;text-transform:uppercase;">AZIMUTH&nbsp;NORTH&#176;&nbsp;&nbsp;&middot;&nbsp;&nbsp;FIELD&nbsp;NOTE</div>`;
const footer = `<div style="width:100%;font-family:'Courier New',monospace;font-size:8px;color:#5c503c;padding:0 54px;display:flex;justify-content:space-between;"><span>azimuth-north.com</span><span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>`;

const browser = await chromium.launch();
const published = manifest.articles.filter(a => a.published);
console.log(`Generating ${published.length} PDF(s) from ${BASE} ...`);

for (const a of published) {
  const page = await browser.newPage();
  const url = `${BASE}/articles/${a.slug}.html`;
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'print' });
  await page.pdf({
    path: join(root, 'articles', `${a.slug}.pdf`),
    format: 'Letter',
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: header,
    footerTemplate: footer,
    margin: { top: '96px', bottom: '72px', left: '54px', right: '54px' },
  });
  console.log(`  ✓ articles/${a.slug}.pdf`);
  await page.close();
}

await browser.close();
console.log('Done.');
