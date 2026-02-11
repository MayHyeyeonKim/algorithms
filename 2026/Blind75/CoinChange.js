// 322. Coin Change

function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  //   console.log("dp는? => ", dp);
  dp[0] = 0;
  //   console.log("dp 0번째에 0으로 채운거? => ", dp);

  for (let x = 1; x <= amount; x++) {
    for (const coin of coins) {
      if (x - coin >= 0) {
        dp[x] = Math.min(dp[x], dp[x - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(coinChange([1, 2, 3], 6)); // 2
