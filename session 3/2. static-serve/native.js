const http = require("http");
const fs = require("fs");
const join = require("path").join;

http
  .createServer((req, res) => {
    if (req.url === "/") {
      fs.readFile(join(__dirname, "static/index.html"), "utf8", (e, data) => {
        if (!e) {
          res.end(data);
        } else {
          res.end("error: " + e.message);
        }
      });
    } else {
      res.end("404 Not Found");
    }
  })
  .listen(9000);
