from collections import deque
class Solution:
    def updateMatrix(self, mat):
        n_rows, n_cols = len(mat), len(mat[0])
        queue = deque()

        for r in range(n_rows):
            for c in range(n_cols):
                if mat[r][c] == 0:
                    queue.append((r,c))
                else:
                    mat[r][c] = -1

        while queue:
            row, col = queue.popleft()
            for r,c in [(-1,0), (1,0), (0,-1), (0,1)]:
                if 0 <= row+r < n_rows and 0 <= col+c < n_cols:
                    if mat[row+r][col+c] == -1:
                        mat[row+r][col+c] = mat[row][col]+1
                        queue.append((row+r, col+c))
        return mat
    
mat = [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1]
]
solution = Solution()
print(solution.updateMatrix(mat))

# TC = O(rc)
# SC = O(rc)