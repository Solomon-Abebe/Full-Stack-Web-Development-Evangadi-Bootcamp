const express = require("express");
const randomNum = require("./randomNumber");
const app = express();
const PORT = 1234;

app.get("/", (req, res) => {
  const generateRandNum = randomNum.random(10, 100);
  res.send(`Request received and processed: ${generateRandNum}`);
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
