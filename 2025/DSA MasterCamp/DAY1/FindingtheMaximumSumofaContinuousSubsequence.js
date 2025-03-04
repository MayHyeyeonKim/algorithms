const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let N = parseInt(input[0], 10);
let arr = input[1].split(" ").map(Number);

let max_sum = -Infinity;
let current_sum = 0;

for (let i = 0; i < N; i++) {
  current_sum += arr[i];
  max_sum = Math.max(max_sum, current_sum);

  if (current_sum < 0) {
    current_sum = 0;
  }
}

console.log(max_sum);
