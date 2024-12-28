from collections import deque
class Solution:
    def pacificAtlantic(self, heights):
        m = len(heights)
        n = len(heights[0])

        def help( deq, visit):
            m = len(heights)
            n = len(heights[0])
            while deq:
                x,y = deq.popleft()
                for dx,dy in  [ [0,1],[1,0],[-1,0],[0,-1] ]:
                    nx, ny = x+dx, y+dy
                    if 0<=nx<m and 0<=ny<n and (nx,ny) not in visit and heights[nx][ny] >= heights[x][y]:
                        visit.add((nx,ny))
                        deq.append((nx,ny))
            return visit
        pacific = deque()
        pacific_visit = set()
        atlantic = deque()
        atlantic_visit =set()
        for i in range(m):
            pacific.append((i,0))
            pacific_visit.add((i,0))
            atlantic.append((i,n-1))
            atlantic_visit.add((i,n-1))
        for j in range(n):
            pacific.append((0,j))
            pacific_visit.add((0,j))
            atlantic.append((m-1,j))
            atlantic_visit.add((m-1,j))
        return help(pacific, pacific_visit) & help(atlantic,atlantic_visit)

heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
sol = Solution()
result = sol.pacificAtlantic(heights)
print(result)