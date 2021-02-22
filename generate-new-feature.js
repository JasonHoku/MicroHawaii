const fs = require("fs");
const { toInteger } = require("lodash");
const packageJson = require("./package.json");

const appVersion = packageJson.version;

const jsonData = {
  version: appVersion,
};

var jsonContent = JSON.stringify(jsonData);

fs.readFile("./package.json", "utf8", (err, data) => {
  if (err) {
    console.log(`Error reading file from disk: ${err}`);
  } else {
    const JSONData = JSON.parse(data);

    let majorVar = JSON.stringify(JSONData).split(".")[0].split(`"`)[7];
    let newFeature = toInteger(JSON.stringify(JSONData).split(".")[1]) + 1;
    let minorVar = toInteger(
      JSON.stringify(JSONData).split(".")[2].split(`"`)[0]
    );
    minorVar = 0;

    console.log((JSONData.version = `${majorVar}.${newFeature}.${minorVar}`));

    console.log();

    fs.writeFile("./package.json", JSON.stringify(JSONData, null, 4), (err) => {
      if (err) {
        console.log(`Error writing file: ${err}`);
      }
      console.log("meta.json file has been saved with latest version number");
    });
  }
});

fs.readFile("./package.json", "utf8", (err, data) => {
  if (err) {
    console.log(`Error reading file from disk: ${err}`);
  } else {
    const JSONData = JSON.parse(data);

    let majorVar = JSON.stringify(JSONData).split(".")[0].split(`"`)[7];
    let newFeature = toInteger(JSON.stringify(JSONData).split(".")[1]) + 1;
    let minorVar = toInteger(
      JSON.stringify(JSONData).split(".")[2].split(`"`)[0]
    );
    minorVar = 0;

    console.log((JSONData.version = `${majorVar}.${newFeature}.${minorVar}`));

    console.log();

    fs.writeFile(
      "./public/meta.json",
      JSON.stringify(
        { version: `${majorVar}.${newFeature}.${minorVar}` },
        null,
        4
      ),
      (err) => {
        if (err) {
          console.log(`Error writing file: ${err}`);
        }
        console.log("meta.json file has been saved with latest version number");
      }
    );
  }
});

fs.readFile("./package.json", "utf8", (err, data) => {
  if (err) {
    console.log(`Error reading file from disk: ${err}`);
  } else {
    const JSONData = JSON.parse(data);

    let majorVar = JSON.stringify(JSONData).split(".")[0].split(`"`)[7];
    let newFeature = toInteger(JSON.stringify(JSONData).split(".")[1]) + 1;
    let minorVar = toInteger(
      JSON.stringify(JSONData).split(".")[2].split(`"`)[0]
    );
    minorVar = 0;

    console.log((JSONData.version = `${majorVar}.${newFeature}.${minorVar}`));

    console.log();

    fs.writeFile(
      "./src/meta.json",
      JSON.stringify(
        { version: `${majorVar}.${newFeature}.${minorVar}` },
        null,
        4
      ),
      (err) => {
        if (err) {
          console.log(`Error writing file: ${err}`);
        }
        console.log("meta.json file has been saved with latest version number");
      }
    );
  }
});
