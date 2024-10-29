const express = require("express");
const path = require("path");

const app = express();
const PORT = 1237;

app.use(express.static(path.join(__dirname, "static/apple-html-css-replica")));
// No need to use get as midlleware use routs through the directory
// app.get("/", (req, res) => {
//   const filePath = path.join(
//     __dirname,
//     "static/apple-html-css-replica/index.html"
//   );
//   res.sendFile(filePath);
// });
// app.get("/about", (req, res) => {
//   const filePath = path.join(
//     __dirname,
//     "static/apple-html-css-replica/about.html"
//   );
//   res.sendFile(filePath);
// });

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
