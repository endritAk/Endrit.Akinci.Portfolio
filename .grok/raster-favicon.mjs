import { chromium } from "playwright";
import { readFileSync } from "node:fs";

const svg = readFileSync("/workspace/public/favicon.svg", "utf8");
const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

async function snap(size, out) {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: size, height: size },
    deviceScaleFactor: 1,
  });
  await page.setContent(
    `<!doctype html><html><head><style>
      html,body{margin:0;width:${size}px;height:${size}px;background:#f3f2ee}
      img{width:${size}px;height:${size}px;image-rendering:pixelated;display:block}
    </style></head><body><img src="${dataUrl}" width="${size}" height="${size}" alt="EA"></body></html>`,
    { waitUntil: "load" },
  );
  await page.locator("img").screenshot({ path: out });
  await browser.close();
}

await snap(16, "/workspace/.grok/favicon-16-render.png");
await snap(256, "/workspace/.grok/favicon-256-render.png");
console.log("rasterized 16 and 256");
