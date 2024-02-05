// 최소,최대

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let min = arr[0];
let max = arr[0];

for (let i = 1; i < n; i++) {
    if (min > arr[i]) min = arr[i];
    if (max < arr[i]) max = arr[i];
}
console.log(min, max);

// let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().split('\n')

// let n = Number(input[0])
// let data = input[1].split(' ').map(x => Number(x));

// let minV = data.reduce((a,b)=>Math.min(a,b));
// let maxV = data.reduce((a,b)=>Math.max(a,b));

// console.log(minV + " " + maxV)
