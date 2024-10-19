// LC200NumberofIslands_bfs.js
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

  function bfs(x, y) {
    const queue = [[x, y]];
    grid[x][y] = "0";

    while (queue.length > 0) {
      const [curX, curY] = queue.shift();

      for (const [dx, dy] of directions) {
        const newX = curX + dx;
        const newY = curY + dy;

        if (
          newX >= 0 &&
          newX < rows &&
          newY >= 0 &&
          newY < cols &&
          grid[newX][newY] === "1"
        ) {
          queue.push([newX, newY]);
          grid[newX][newY] = "0";
        }
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        bfs(i, j);
        islandCount++;
      }
    }
  }

  return islandCount;
};
