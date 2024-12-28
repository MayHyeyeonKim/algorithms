from collections import deque
class Solution:
    def orangesRotting(self, grid):
        rows, cols = len(grid), len(grid[0])
        time, fresh = 0, 0

        q = deque()
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 1:
                    fresh += 1
                if grid[r][c] == 2:
                    q.append([r,c])
        
        directions = [[-1,0],[1,0],[0,-1],[0,1]]
        while q and fresh > 0:
            for _ in range(len(q)):
                r,c = q.popleft()
                for dr,dc in directions:
                    nr, nc = r+dr, c+dc
                    if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:
                        grid[nr][nc] = 2
                        fresh -=1
                        q.append([nr, nc])
            time += 1
        return time if fresh == 0 else -1

grid = [[2,1,1],[1,1,0],[0,1,1]]
sol = Solution()
result = sol.orangesRotting(grid)
print(result)

# TC O(rows*cols)
# SC O(rows*cols)