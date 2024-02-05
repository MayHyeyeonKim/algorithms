from collections import deque


class Solution:
    def numIsislands(grid):
        number_of_Island = 0
        col = len(grid[0])
        row = len(grid)
        visited = [[False] * col for _ in range(row)]

        def bfs(x, y):
            dx = [-1, 1, 0, 0]
            dy = [0, 0, -1, 1]
            visited[x][y] = True
            q = deque()
            q.append((x, y))
            while q:
                cur_x, cur_y = q.popleft()
                for i in range(4):
                    next_x = cur_x + dx[i]
                    next_y = cur_y + dy[i]
                    if next_x >= 0 and next_x < row and next_y >= 0 and next_y < col:
                        if grid[next_x][next_y] == "1" and not visited[next_x][next_y]:
                            visited[next_x][next_y] = True
                            q.append((next_x, next_y))

        for x in range(row):
            for y in range(col):
                if grid[x][y] == "1" and not visited[x][y]:
                    bfs(x, y)
                    number_of_Island += 1
        return number_of_Island


grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
]
sol = Solution
ans = sol.numIsislands(grid)
print(ans)
