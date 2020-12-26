/* A script to update the "last updated tag" in index.html */

var fs = require("fs"),
  path = require("path"),
  filePath = path.join(__dirname, "index.html");

fs.readFile(filePath, { encoding: "utf-8" }, function (err, data) {
  if (!err) {
    htmlDoc = document.createElement("html");
    htmlDoc.innerText = data;

    htmlDoc.getElementsByClassName("last-update");
    console.log(htmlDoc.textContent);
  } else {
    console.log(err);
  }
});
