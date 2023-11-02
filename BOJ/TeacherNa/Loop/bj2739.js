// 구구단 | Multiplication table | Times table

fs = require("fs");
// input = fs.readFileSync("/dev/stdin").toString().split("\n");
input = [[9]];
let n = Number(input[0]);

for (let i = 1; i <= 9; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
}
