// 453. Minimum Moves to Equal Array Elements
// "다른 걸 올리는 것 = 어떤 하나를 줄이는 것"

/**
블록이 [1, 2, 3]이면, 제일 작은 숫자 1에 맞게 나머지를 줄이는 거:

2를 1로 줄이려면 1번
3을 1로 줄이려면 2번

🧱🧱🧱🧱🧱      ← 5
🧱🧱🧱🧱🧱🧱    ← 6
🧱🧱🧱🧱🧱🧱🧱🧱 ← 8

결론: 제일 작은 숫자(min)를 찾고 각 숫자에서 그 숫자를 뺀 값을 다 더하면 그게 바로 정답!
 */

function minMoves(nums) {
  nums.sort((a, b) => a - b);
  let res = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    res += nums[i] - nums[0];
  }
  return res;
}

console.log(minMoves([1, 2, 3]));

// O(n log n)

///////////////////////////
// (a₁ - min) + (a₂ - min) + ... + (aₙ - min) = (a₁ + a₂ + ... + aₙ) - (min × n) = sum(nums) - min × nums.length = (1 - 1) + (2 - 1) + (3 - 1)

let minMoves2 = (nums) => {
  let min = Infinity;
  let res = 0;
  for (let num of nums) {
    if (num < min) min = num;
    res += num;
  }
  return res - min * nums.length;
};

console.log(minMoves2([1, 2, 3]));
