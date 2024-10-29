const http = require("http");
const randomNum =require("./randomNumber");

// const mimeTyeps = require("mime-types").lookup;

const myServer = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  const generateRandNum = randomNum.random(10, 100);
  res.end(`Request received and processed ${generateRandNum}`);
});
const PORT = 1234;
myServer.listen(PORT, () => {
  console.log("Server running on port 1234");
});

