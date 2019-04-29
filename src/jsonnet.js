let Jsonnet = require("jsonnet");
const prettier = require("prettier");
let jsonnet = new Jsonnet();
let fs = require("fs");
let code = fs.readFileSync("./landingpage.jsonnet");
let result = jsonnet.eval(code);
console.log(
  prettier.format(JSON.stringify(result), { semi: false, parser: "babel" })
);
