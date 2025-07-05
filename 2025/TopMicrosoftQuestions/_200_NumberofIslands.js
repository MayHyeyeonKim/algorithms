// 1) DFS (재귀)
var numIslands = function (grid) {
  if (!grid.length) return 0;
  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  const dfs = (r, c) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === "0") return;
    grid[r][c] = "0";

    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        count++;
        dfs(r, c);
      }
    }
  }
  return count;
};

// 2) BFS (큐)
var numIslands = function (grid) {
  if (!grid.length) return;
  let count = 0;

  const rows = grid.length;
  const cols = grid[0].length;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        count++;
        const queue = [[r, c]];
        grid[r][c] = "0";

        while (queue.length) {
          const [x, y] = queue.shift();
          for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && ny >= 0 && nx < rows && ny < cols && grid[nx][ny] === "1") {
              queue.push([nx, ny]);
              grid[nx][ny] = "0";
            }
          }
        }
      }
    }
  }

  return count;
};
