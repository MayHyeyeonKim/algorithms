//  1091. Shortest Path in Binary Matrix

var shortestPathBinaryMatrix = function (grid) {
  /**
    그리드 길이
    시작과 끝이 1이면 그냥 반환 -1
    디렉션 정의

    큐 선언, 
    그리드 제일 앞을 큐에 넣고, 방문표시

    큐가 있을 동안
    큐에 왼쪽을 빼서, 
    그리드 제일 마지막에 도달하면 dist반환

    디렉션을 for 루프 돌면서
    다름 x,y 정하고
    범위안에 있으면 {
        방문처리,
        큐에 넣기
    }

    리턴 -1
     */

  const n = grid.length;
  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;

  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];

  const queue = [[0, 0, 1]];
  grid[0][0] = 1;

  while (queue.length) {
    const [x, y, dist] = queue.shift();

    if (x === n - 1 && y === n - 1) return dist;

    for (const [dx, dy] of dirs) {
      const nx = x + dx,
        ny = y + dy;

      if (nx >= 0 && ny >= 0 && nx < n && ny < n && grid[nx][ny] === 0) {
        grid[nx][ny] = 1;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }
  return -1;
};
