class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        for i,row in enumerate(board):
            for j,column in enumerate(row):
                if column == word[0] and self.dfs(board,i,j,word):
                    return True
        return False

    def dfs(self, board, i, j, w):
        if len(w) == 0:
            return True
        if i<0 or i>= len(board) or j<0 or j>= len(board[0])or board[i][j] != w[0]:
            return False
        temp = board[i][j]
        board[i][j] ="#"
        res = self.dfs(board,i-1,j,w[1:]) or self.dfs(board,i+1,j,w[1:]) or self.dfs(board,i,j-1,w[1:]) or self.dfs(board,i,j+1,w[1:])
        board[i][j] = temp
        return res