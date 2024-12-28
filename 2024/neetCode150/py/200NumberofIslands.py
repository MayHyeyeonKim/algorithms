from collections import deque
class Solution:
    def numIslands(self, grid):
        dirs = [ [1,0],[0,1],[-1,0],[0,-1] ]
        m = len(grid)
        n = len(grid[0])
        ans = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == '1':
                    ans += 1
                    deq = deque([(i,j)])

                    grid[i][j] = -1

                    while deq:
                        x,y = deq.popleft()
                        for dx,dy in dirs:
                            nx, ny = x+dx, y+dy
                            if 0<=nx<m and 0<=ny<n and grid[nx][ny] == '1':
                                grid[nx][ny] = -1
                                deq.append((nx,ny))
        return ans

grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

sol = Solution()
result = sol.numIslands(grid)
print(result)