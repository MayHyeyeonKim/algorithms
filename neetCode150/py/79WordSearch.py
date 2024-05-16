class Solution:
    def exist(self, board, word):
        rows, cols = len(board), len(board[0])
        path = set()

        def backtracking(r,c,i):
            if i == len(word): #만약 i의 값이 word와 같다면 찾은거니까
                return True
            if (r < 0 or r >= rows) or (c < 0 or c >= cols) or (r,c) in path or word[i] != board[r][c]:
                return False
            path.add((r,c)) 
            ret = (
                backtracking(r,c-1,i+1) or
                backtracking(r,c+1,i+1) or
                backtracking(r-1,c,i+1) or
                backtracking(r+1,c,i+1)
            )
            path.remove((r,c))
            return ret

        for r in range(rows):
            for c in range(cols):
                res = backtracking(r,c,0)
                if res:
                    return True
        return False

board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
word = "ABCCED"

sol = Solution()
result = sol.exist(board,word)
print(result)
# backtracking <- 4가지 방향을 len(word)번 반복
#TC: O(m*n) * O(4^l)