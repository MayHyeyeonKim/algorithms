// 70. Climbing Stairs

function climbStairs(n) {
  if (n <= 2) return n;

  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

function climbStairs2(n) {
  if (n <= 2) return n;

  let first = 1,
    second = 2;

  for (let i = 3; i <= n; i++) {
    const current = first + second;
    first = second;
    second = current;
  }
  return second;
}

console.log(climbStairs(3)); // Output: 3
console.log(climbStairs(5)); // Output: 8
console.log(climbStairs2(3)); // Output: 3
console.log(climbStairs2(5)); // Output: 8
