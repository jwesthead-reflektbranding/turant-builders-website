// Minimal zero-dependency static file server for the Turant Builders site.
// Serves the files in ./site on the port Render provides via $PORT.
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "site");
const PORT = process.env.PORT || 3000;

const CONTENT_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath === "/") urlPath = "/index.html";

  const filePath = path.join(ROOT, urlPath);

  // Prevent path traversal outside ROOT.
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Fall back to index.html so client-side routes still resolve.
      fs.readFile(path.join(ROOT, "index.html"), (indexErr, indexData) => {
        if (indexErr) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("Not found");
          return;
        }
        res.writeHead(200, { "Content-Type": CONTENT_TYPES[".html"] });
        res.end(indexData);
      });
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": CONTENT_TYPES[ext] || "application/octet-stream",
    });
    res.end(data);
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Turant Builders site serving ./site on port ${PORT}`);
});
