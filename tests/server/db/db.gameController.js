const fs = require("fs");
const path = require("path");
const db = require("../../../server/controllers/gameController.js")

const testJsonFile = path.resolve("gameController.test.json");

fs.writeFile(testJsonFile, JSON.stringify([]), () => console.log('hi'));


console.log(testJsonFile);