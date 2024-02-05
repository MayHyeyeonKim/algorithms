// 합
fs = require("fs");
input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     sum += i;
// }

// console.log(sum);

// 또는 등차수열의 합 공식
// Sn = n(a + l) / 2;

console.log((n * (n + 1)) / 2);
