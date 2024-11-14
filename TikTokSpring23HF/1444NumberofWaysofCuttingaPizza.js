/**
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */
const ways = function (pizza, k) {
  const MOD = 1e9 + 7;
  const rows = pizza.length;
  const cols = pizza[0].length;

  // Prefix sum to calculate the number of apples in any submatrix quickly
  const prefix = Array.from({ length: rows + 1 }, () =>
    Array(cols + 1).fill(0)
  );

  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 0; j--) {
      prefix[i][j] =
        (pizza[i][j] === "A" ? 1 : 0) +
        prefix[i + 1][j] +
        prefix[i][j + 1] -
        prefix[i + 1][j + 1];
    }
  }

  // Check if there is at least one apple in the sub-pizza from (i, j) to the bottom-right
  const hasApple = (r1, c1, r2, c2) =>
    prefix[r1][c1] - prefix[r2][c1] - prefix[r1][c2] + prefix[r2][c2] > 0;

  // 3D DP array with memoization
  const dp = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => Array(k).fill(-1))
  );

  const dfs = (i, j, cuts) => {
    if (cuts === 0) return hasApple(i, j, rows, cols) ? 1 : 0;
    if (dp[i][j][cuts] !== -1) return dp[i][j][cuts];

    let ways = 0;

    // Horizontal cuts
    for (let x = i + 1; x < rows; x++) {
      if (hasApple(i, j, x, cols)) {
        ways = (ways + dfs(x, j, cuts - 1)) % MOD;
      }
    }

    // Vertical cuts
    for (let y = j + 1; y < cols; y++) {
      if (hasApple(i, j, rows, y)) {
        ways = (ways + dfs(i, y, cuts - 1)) % MOD;
      }
    }

    dp[i][j][cuts] = ways;
    return ways;
  };

  return dfs(0, 0, k - 1);
};
