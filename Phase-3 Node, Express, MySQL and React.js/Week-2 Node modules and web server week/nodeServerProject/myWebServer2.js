const http = require("http");
const fs = require("fs");
const mimeType = require("mime-types").lookup;

const appleServer = http.createServer((req, res) => {
  let filePath = req.url;
  if (filePath === "/") {
    filePath = "/about.html";
  } else if (filePath === "/home") {
    filePath = "/index.html";
  }

  let requestedFile = "./static/apple-html-css-replica" + filePath;

  fs.readFile(requestedFile, (err, content) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    } else {
      res.writeHead(200, {
        "Content-Type": mimeType(filePath) || "text/plain",
      });
      res.end(content);
    }
  });
});
const PORT = 1235;
appleServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
