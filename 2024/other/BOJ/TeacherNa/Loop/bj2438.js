// 별 찍기 - 1
// fs = require("fs");
// input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let n = Number(input[0]);

// let result = "";
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j <= i; j++) {
//         result += "*";
//     }
//     result += "\n";
// }
// console.log(result);

const fs = require("fs");
// const inputData = fs.readFileSync("/dev/stdin").toString();
const inputData = [[5]];

const num = Number(inputData);
let result = "";

// 누적합을 매 반복마다 출력
for (let i = 1; i <= num; i++) {
    result += "*";
    console.log(result);
}
