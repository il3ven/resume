/* A script to update the "last updated tag" in index.html */

var fs = require("fs");
var path = require("path");
var filePath = path.join(__dirname, "index.html");
var parse = require("node-html-parser").parse;

fs.readFile(filePath, { encoding: "utf-8" }, function (err, data) {
  if (!err) {
    const html = parse(data);

    const date = new Date().toLocaleString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    html
      .querySelector(".last-update")
      .setAttribute("#text", `Last Updated on ${date}`);

    fs.writeFile("build/index.html", html.innerHTML, function (err) {
      if (err) {
        console.error("Error Occured", err);
      }

      console.log("File written");
    });
  } else {
    console.log(err);
  }
});
