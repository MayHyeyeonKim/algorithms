// a * b

fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

data = input[0].split(" ");

a = Number(data[0]);
b = Number(data[1]);

console.log(a * b);
