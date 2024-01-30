from collections import deque


class Solution:
    def numIslands(self, grid):
        row = len(grid)
        col = len(grid[0])
        visited = [[False] * col for _ in range(row)]
        dx = [0, 0, 1, -1]
        dy = [1, -1, 0, 0]
        count = 0

        def bfs(x, y):
            q = deque()
            q.append((x, y))
            while q:
                curx, cury = q.pop()
                for i in range(4):
                    nextx = curx + dx[i]
                    nexty = cury + dy[i]
                    if nextx >= 0 and nexty >= 0 and nextx < row and nexty < col:
                        if grid[nextx][nexty] == "1" and not visited[nextx][nexty]:
                            visited[nextx][nexty] = True
                            q.append((nextx, nexty))

        for r in range(row):
            for c in range(col):
                if grid[r][c] == "1" and not visited[r][c]:
                    visited[r][c] = True
                    count += 1
                    bfs(r, c)

        return count


grid = [["1", "0", "1", "1", "0", "1", "1"]]
sol = Solution()
ans = sol.numIslands(grid)
print(ans)
