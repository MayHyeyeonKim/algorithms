import copy


class Solution:
    def orangesRotting(self, grid):
        fresh = 0
        row = len(grid)
        col = len(grid[0])

        for i in range(row):
            for j in range(col):
                if grid[i][j] == 1:
                    fresh += 1

        min = 0
        prev = fresh
        while True:
            cp = copy.deepcopy(grid)
            for i in range(row):
                for j in range(col):
                    if grid[i][j] == 2:
                        for r, c in [(i - 1, j), (i + 1, j), (i, j - 1), (i, j + 1)]:
                            if 0 <= r < row and 0 <= c < col and cp[r][c] == 1:
                                cp[r][c] = 2
                                fresh -= 1
            if prev == fresh:
                break
            min += 1
            grid = cp
            prev = fresh

        if fresh > 0:
            return -1
        else:
            return min


grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]
solution = Solution()
result = solution.orangesRotting(grid)
print("최소 시간:", result)
