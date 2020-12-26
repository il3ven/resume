/* A script to update the "last updated tag" in index.html */

var fs = require("fs");
var path = require("path");
var filePath = path.join(__dirname, "source.html");
var parse = require("node-html-parser").parse;

fs.readFile(filePath, { encoding: "utf-8" }, function (err, data) {
  if (!err) {
    const html = parse(data);

    const date = new Date().toLocaleString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    console.log(date);

    console.log(html.querySelector(".last-update").lastChild);

    html
      .querySelector(".last-update")
      .insertAdjacentHTML("beforeend", `Last Updated on ${date}`);

    fs.writeFile("index.html", html.innerHTML, function (err) {
      if (err) {
        console.error("Error Occured", err);
      }

      console.log("File written");
    });
  } else {
    console.log(err);
  }
});
