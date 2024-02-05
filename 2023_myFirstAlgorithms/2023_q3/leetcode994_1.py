from collections import deque


class Solution:
    def orangesRotting(self, grid):
        fresh = 0
        q = deque()
        row = len(grid)
        col = len(grid[0])

        for i in range(row):
            for j in range(col):
                if grid[i][j] == 2:
                    q.append((i, j, 0))
                if grid[i][j] == 1:
                    fresh += 1

        min = 0
        while q:
            i, j, min = q.popleft()
            if grid[i][j] == 2:
                for r, c in [(i - 1, j), (i + 1, j), (i, j - 1), (i, j + 1)]:
                    if 0 <= r < row and 0 <= c < col and grid[r][c] == 1:
                        grid[r][c] = 2
                        fresh -= 1
                        q.append((r, c, min + 1))

        if fresh > 0:
            return -1
        else:
            return min


grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]
solution = Solution()
result = solution.orangesRotting(grid)
print("최소 시간:", result)
