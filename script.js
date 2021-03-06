/* A script to update the "last updated tag" in index.html */

var fs = require("fs");
var path = require("path");
var filePath = path.join(__dirname, "source.html");
var parse = require("node-html-parser").parse;

fs.readFile(filePath, { encoding: "utf-8" }, function (err, data) {
  if (!err) {
    const html = parse(data);

    const comment = `<!--Auto generated at ${new Date().toUTCString()}-->\n`;
    const date = new Date().toLocaleString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    html
      .querySelector(".last-update")
      .insertAdjacentHTML("beforeend", `Last Updated on ${date}`);

    fs.writeFile("index.html", comment + html.innerHTML, function (err) {
      if (err) {
        console.error("Error Occured", err);
      }

      console.log("File written");
    });
  } else {
    console.log(err);
  }
});
