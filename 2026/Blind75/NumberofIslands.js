// 200. Number of Islands

function numIslandsDFS(grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  const dfs = (r, c) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === "0") {
      return;
    }

    grid[r][c] = "0"; // Mark as visited

    // Explore all four directions
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        islandCount++;
        dfs(r, c);
      }
    }
  }

  return islandCount;
}

function numIslandsBFS(grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  const directions = [
    [1, 0], // down
    [-1, 0], // up
    [0, 1], // right
    [0, -1], // left
  ];

  const bfs = (r, c) => {
    const queue = [];
    queue.push([r, c]);
    grid[r][c] = "0"; // Mark as visited

    while (queue.length > 0) {
      const [currR, currC] = queue.shift();

      for (const [dr, dc] of directions) {
        const newR = currR + dr;
        const newC = currC + dc;

        if (newR >= 0 && newC >= 0 && newR < rows && newC < cols && grid[newR][newC] === "1") {
          grid[newR][newC] = "0"; // Mark as visited
          queue.push([newR, newC]);
        }
      }
    }
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        islandCount++;
        bfs(r, c);
      }
    }
  }

  return islandCount;
}

// Example usage:
const grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

// console.log(numIslandsDFS(grid)); // Output: 3
console.log(numIslandsBFS(grid)); // Output: 3
