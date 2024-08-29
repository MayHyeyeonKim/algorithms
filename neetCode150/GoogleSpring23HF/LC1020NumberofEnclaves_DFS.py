class Solution:
    def numEnclaves(self, grid):
        rows, cols = len(grid), len(grid[0])

        def dfs(row, col):
            if row < 0 or row >= rows or col < 0 or col >= cols or grid[row][col] == 0:
                return
            grid[row][col] = 0
            dfs(row+1, col)
            dfs(row-1, col)
            dfs(row, col+1)
            dfs(row, col-1)
        
        for i in range(rows):
            if grid[i][0] == 1:
                dfs(i,0)
            if grid[i][cols-1] == 1:
                dfs(i, cols-1)
        
        for j in range(cols):
            if grid[0][j] == 1:
                dfs(0,j)
            if grid[rows-1][j] ==1:
                dfs(rows-1,j)
        
        return sum(sum(row) for row in grid)