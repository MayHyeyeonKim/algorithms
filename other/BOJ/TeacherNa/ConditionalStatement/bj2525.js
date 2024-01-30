//오븐 시계

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b] = input[0].split(" ").map(Number);
let c = Number(input[1]);

let totalMin = a * 60 + b + c;
totalMin %= 1440;

let hour = parseInt(totalMin / 60);
let min = parseInt(totalMin % 60);

console.log(hour + " " + min);
