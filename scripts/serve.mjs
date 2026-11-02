import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { resolve, extname, sep } from "node:path";

const root = resolve("out");
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
const port = Number(process.env.PORT || 3000);
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".png": "image/png", ".webp": "image/webp", ".json": "application/json", ".txt": "text/plain" };
createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname); } catch { res.writeHead(400).end(); return; }
  if (prefix && !pathname.startsWith(prefix + "/") && pathname !== prefix) { res.writeHead(404).end(); return; }
  const path = resolve(root, "." + (pathname.slice(prefix.length) || "/"));
  if (path !== root && !path.startsWith(root + sep)) { res.writeHead(403).end(); return; }
  let file = path;
  if (existsSync(file) && statSync(file).isDirectory()) file = resolve(file, "index.html");
  if (!existsSync(file)) { res.writeHead(404, { "content-type": "text/html" }); createReadStream(resolve(root, "404.html")).pipe(res); return; }
  res.writeHead(200, { "content-type": types[extname(file)] || "application/octet-stream" });
  createReadStream(file).pipe(res);
}).listen(port, "127.0.0.1", () => console.log(`Local: http://127.0.0.1:${port}${prefix}/`));
