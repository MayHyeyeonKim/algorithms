from collections import deque
class Solution:
    def floodFill(self, image, sr, sc, color):
        m, n = len(image), len(image[0])
        ori_color = image[sr][sc]
        if ori_color == color:
            return image
        
        queue = deque([(sr, sc)])
        while queue:
            r, c = queue.popleft()
            if image[r][c] == ori_color:
                image[r][c] = color
                for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                    nr, nc = r + dr, c + dc
                    if 0 <= nr < m and 0 <= nc < n:
                        queue.append((nr, nc))
        return image
    
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1 
sc = 1 
color = 2

sol = Solution()
result = sol.floodFill(image, sr, sc, color)
print(result)
