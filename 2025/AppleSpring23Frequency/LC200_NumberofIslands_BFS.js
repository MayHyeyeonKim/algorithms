/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid || grid.length === 0) return;

  let count = 0;
  let rows = grid.length,
    cols = grid[0].length;
  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const bfs = (r, c) => {
    let queue = [[r, c]];
    grid[r][c] = "0";

    while (queue.length > 0) {
      let [x, y] = queue.shift();

      for (let [dx, dy] of directions) {
        let newX = x + dx,
          newY = y + dy;
        if (
          newX >= 0 &&
          newY >= 0 &&
          newX < rows &&
          newY < cols &&
          grid[newX][newY] === "1"
        ) {
          queue.push([newX, newY]);
          grid[newX][newY] = "0";
        }
      }
    }
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        count++;
        bfs(r, c);
      }
    }
  }
  return count;
};
