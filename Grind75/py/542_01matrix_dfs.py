class Solution:
    def updateMatrix(self, mat):
        n_rows, n_cols = len(mat), len(mat[0])

        def dfs(r,c):
            for row, col in [(-1,0), (1,0), (0,-1), (0,1)]:
                if 0<=r+row<n_rows and 0<=c+col<n_cols:
                    if mat[r+row][c+col] > mat[r][c]+1:
                        mat[r+row][c+col] = mat[r][c]+1
                        dfs(r+row,c+col)

        for r in range(n_rows):
            for c in range(n_cols):
                if mat[r][c] != 0:
                    mat[r][c] = n_rows * n_cols
        
        for r in range(n_rows):
            for c in range(n_cols):
                if mat[r][c] == 0:
                    dfs(r,c)
        return mat


mat = [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1]
]
solution = Solution()
print(solution.updateMatrix(mat))

# TC = O(r*c)^2
# SC = O(r*c)
# Time Limit Exceeded