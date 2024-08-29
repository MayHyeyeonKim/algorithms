from collections import deque

def numEnclaves(grid):
    rows, cols = len(grid), len(grid[0])
    directions = [(0,1), (1,0), (0,-1), (-1,0)]

    def bfs(row, col):
        queue = deque([(row, col)])
        grid[row][col] = 0
        while queue:
            r, c = queue.popleft()
            for dr, dc in directions:
                nr, nc = r + dr, c + dc
                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:
                    grid[nr][nc] = 0
                    queue.append((nr, nc))

    # 가장자리에서 육지를 찾고 BFS 실행
    for i in range(rows):
        if grid[i][0] == 1:
            bfs(i, 0)
        if grid[i][cols-1] == 1:
            bfs(i, cols-1)
    
    for j in range(cols):
        if grid[0][j] == 1:
            bfs(0, j)
        if grid[rows-1][j] == 1:
            bfs(rows-1, j)

    # 남은 육지의 수 계산
    return sum(sum(row) for row in grid)
