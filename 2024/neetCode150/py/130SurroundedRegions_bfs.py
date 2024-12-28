from collections import deque
class Solution:
    def solve(self, board):
        def bfs(x,y):
            direction = [[0,-1],[0,1],[-1,0],[1,0]]
            path = set()
            path.add((x,y))
            dq =deque([[x,y]])
            surrounded = True
            while dq:
                r,c = dq.popleft()
                for dx,dy in direction:
                    new_row, new_col = r+dx, c+dy
                    if 0 <= new_row < row and 0 <= new_col < col and board[new_row][new_col] == 'O':
                        if new_row == 0 or new_row ==  row - 1 or new_col == 0 or new_col == col - 1:
                            surrounded = False
                        if (new_row, new_col) not in path:
                            path.add((new_row, new_col))
                            dq.append([new_row, new_col])
            if surrounded:
                for r, c in path:
                    board[r][c] = 'X'

        col = len(board[0])
        row = len(board)
            
        visited = set()
        for r in range(1, row-1):
            for c in range(1, col-1):
                if(r,c) not in visited and board[r][c] == 'O':
                    visited.add((r,c))
                    bfs(r,c)


board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
sol = Solution()
sol.solve(board)
for row in board:
    print(row)