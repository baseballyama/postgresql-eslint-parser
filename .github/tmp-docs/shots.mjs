// Temporary: serves the docs site built from build/deps-latest (before) and
// from build/docs-kit3 (after) under the Pages base path, records what a
// visitor can reach from each page, and fails if the links, titles, active
// nav item or status differ, or if the playground stops producing output.
import { chromium, devices } from "playwright";
import { createServer } from "node:http";
import { mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { extname, join } from "node:path";

const [beforeDir, afterDir, out] = process.argv.slice(2);
const base = "/postgresql-eslint-parser/";
const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".wasm": "application/wasm", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".ico": "image/x-icon", ".txt": "text/plain" };

// A static host like GitHub Pages: directory -> index.html, otherwise 404
// with the site's 404.html when there is one.
function serve(root, port) {
  return new Promise((done) =>
    createServer((req, res) => {
      const path = decodeURIComponent(new URL(req.url, "http://x").pathname);
      if (!path.startsWith(base)) return res.writeHead(404).end();
      let file = join(root, path.slice(base.length));
      try {
        if (statSync(file).isDirectory()) {
          if (!path.endsWith("/")) return res.writeHead(301, { location: path + "/" }).end();
          file = join(file, "index.html");
        }
        const body = readFileSync(file);
        res.writeHead(200, { "content-type": types[extname(file)] ?? "application/octet-stream" }).end(body);
      } catch {
        let body = "";
        try { body = readFileSync(join(root, "404.html")); } catch {}
        res.writeHead(404, { "content-type": "text/html" }).end(body);
      }
    }).listen(port, "127.0.0.1", done),
  );
}
const sites = { before: "http://127.0.0.1:8001", after: "http://127.0.0.1:8002" };
await serve(beforeDir, 8001);
await serve(afterDir, 8002);

const pages = ["", "docs/", "playground/", "docs/does-not-exist/deeper/"];
const viewports = {
  desktop: { viewport: { width: 1440, height: 900 } },
  mobile: devices["Pixel 7"],
};

mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
const report = {};
for (const [variant, origin] of Object.entries(sites)) {
  for (const [vp, options] of Object.entries(viewports)) {
    const context = await browser.newContext({ ...options, colorScheme: "light" });
    for (const path of pages) {
      const page = await context.newPage();
      const errors = [];
      const failedRequests = [];
      page.on("pageerror", (e) => errors.push(e.message));
      page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
      page.on("response", (r) => r.status() >= 400 && r.url() !== origin + base + path && failedRequests.push(`${r.status()} ${r.url().replace(origin, "")}`));
      const response = await page.goto(origin + base + path, { waitUntil: "networkidle" });
      if (path === "playground/") await page.waitForTimeout(5000);
      const key = `${vp}:${path || "home"}`;
      const data = await page.evaluate(() => ({
        title: document.title,
        absolute: [...document.querySelectorAll("a[href]")].map((a) => a.href),
        active: [...document.querySelectorAll("nav a.active, header a.active")].map((a) => a.textContent.trim()),
        text: document.body.innerText.length,
        stylesheets: document.styleSheets.length,
        bodyFont: getComputedStyle(document.body).fontFamily,
        playground: document.querySelector("main")?.innerText.slice(0, 4000) ?? "",
      }));
      report[key] ??= {};
      report[key][variant] = { status: response.status(), errors, failedRequests, ...data };
      await page.screenshot({ path: `${out}/${variant}-${vp}-${(path || "home").replaceAll("/", "_")}.png`, fullPage: true });
      await page.close();
    }
    await context.close();
  }
}
await browser.close();

let failed = false;
for (const [key, { before, after }] of Object.entries(report)) {
  const norm = (d, origin) => d.absolute.map((u) => u.replace(origin, ""));
  const same =
    before.title === after.title &&
    JSON.stringify(norm(before, sites.before)) === JSON.stringify(norm(after, sites.after)) &&
    JSON.stringify(before.active) === JSON.stringify(after.active) &&
    before.status === after.status &&
    before.bodyFont === after.bodyFont;
  console.log(`${same ? "same" : "DIFF"} ${key}: status ${before.status}/${after.status}, ${after.absolute.length} links, active [${after.active}], text ${before.text}/${after.text}, stylesheets ${before.stylesheets}/${after.stylesheets}, errors ${before.errors.length}/${after.errors.length}, failed requests ${before.failedRequests.length}/${after.failedRequests.length}`);
  if (!same) {
    failed = true;
    console.log(JSON.stringify({ before: { ...before, absolute: norm(before, sites.before), playground: undefined }, after: { ...after, absolute: norm(after, sites.after), playground: undefined } }, null, 1));
  }
  if (after.errors.length) console.log(`after errors on ${key}: ${after.errors.join(" | ")}`);
  if (after.failedRequests.length) { failed = true; console.log(`after failed requests on ${key}: ${after.failedRequests.join(" | ")}`); }
  if (key.endsWith("playground/")) {
    const sameOutput = before.playground === after.playground;
    console.log(`playground output ${sameOutput ? "same" : "DIFF"} on ${key} (${after.playground.length} chars)`);
    if (!sameOutput) { failed = true; console.log(`--- before\n${before.playground}\n--- after\n${after.playground}`); }
  }
}

const internal = new Set(
  Object.values(report).flatMap((r) => r.after.absolute.filter((u) => u.startsWith(sites.after + base))),
);
for (const url of internal) {
  const res = await fetch(url, { redirect: "manual" });
  await res.arrayBuffer();
  if (res.status !== 200) {
    failed = true;
    console.log(`link ${url.replace(sites.after, "")} -> ${res.status}`);
  }
}
console.log(`checked ${internal.size} internal links`);
writeFileSync(`${out}/report.json`, JSON.stringify(report, null, 1));
process.exitCode = failed ? 1 : 0;
