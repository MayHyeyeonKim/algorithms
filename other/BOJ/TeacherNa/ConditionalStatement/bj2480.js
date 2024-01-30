//주사위 세개

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = Number(input[0].split(" ")[0]);
let b = Number(input[0].split(" ")[1]);
let c = Number(input[0].split(" ")[2]);

if (a == b && b == c) console.log(10000 + a * 1000);
else if (a == b) console.log(1000 + a * 100);
else if (a == c) console.log(1000 + a * 100);
else if (c == b) console.log(1000 + b * 100);
else console.log(Math.max(a, b, c) * 100);
