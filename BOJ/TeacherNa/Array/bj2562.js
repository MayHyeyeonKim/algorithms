// 최댓값

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let maxIdx = 0;
let maxVal = 0;

for (let i = 0; i < 9; i++) {
    let data = Number(input[i]);
    if (maxVal < data) {
        maxVal = data;
        maxIdx = i;
    }
}

console.log(maxVal);
console.log(maxIdx + 1);

// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// let data = input.map(x => Number(x));
// let max = Math.max(...data);

// console.log(max);
// console.log(input.indexOf(max) + 1);
