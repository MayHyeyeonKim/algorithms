// 숫자의 합

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let string = input[1];

let ans = 0;
for (let x of string) {
    ans += Number(x);
}

console.log(ans);
