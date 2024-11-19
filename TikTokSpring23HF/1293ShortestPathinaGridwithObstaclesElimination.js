function shortestPath(grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  // visited[x][y][remaining_k] -> (x, y) 좌표에서 남은 k 값으로 방문 여부 확인
  const visited = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => Array(k + 1).fill(false))
  );

  const queue = [[0, 0, 0, k]]; // [x, y, steps, remaining_k]
  visited[0][0][k] = true;

  while (queue.length > 0) {
    const [x, y, steps, remainingK] = queue.shift();

    // 목표 지점 도달
    if (x === m - 1 && y === n - 1) {
      return steps;
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
        const nextK = remainingK - grid[nx][ny];

        if (nextK >= 0 && !visited[nx][ny][nextK]) {
          visited[nx][ny][nextK] = true;
          queue.push([nx, ny, steps + 1, nextK]);
        }
      }
    }
  }

  return -1; // 도달 불가능한 경우
}
