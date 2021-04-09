const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    fs.createReadStream("index.html").pipe(res);
  })
  .listen(9000, () => {
    console.log("listen 9000");
  });
