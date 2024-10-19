// LC200NumberofIslands_dfs.js
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  let islandCount = 0;

  function dfs(x, y) {
    if (x < 0 || x >= rows || y < 0 || y >= cols || grid[x][y] === "0") {
      return;
    }
    grid[x][y] = "0";
    for (const [dx, dy] of directions) {
      dfs(x + dx, y + dy);
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        dfs(i, j);
        islandCount++;
      }
    }
  }

  return islandCount;
};
