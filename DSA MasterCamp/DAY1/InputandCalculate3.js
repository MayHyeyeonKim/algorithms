const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let a = parseInt(input[0], 10);
let b = parseInt(input[1], 10);

console.log(a * b);
