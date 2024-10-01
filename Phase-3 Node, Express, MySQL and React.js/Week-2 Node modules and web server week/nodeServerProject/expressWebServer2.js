const express = require("express");
const path = require("path");
// const mimeType = require("mime-types").lookup;

const app = express();
const PORT = 1236;

app.use(express.static(path.join(__dirname, "static/apple-html-css-replica")));
app.get("/home", (req, res) => {
  const filePath = path.join(
    __dirname,
    "static/apple-html-css-replica/index.html"
  );
  res.sendFile(filePath);
});
app.get("/", (req, res) => {
  const filePath = path.join(
    __dirname,
    "static/apple-html-css-replica/about.html"
  );
  res.sendFile(filePath);
});
app.use((req, res) => {
  res.status(404).send("404 Not Found");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
