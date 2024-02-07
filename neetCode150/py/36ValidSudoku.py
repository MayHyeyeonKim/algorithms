class Solution:
    def isValidSudoku(self, board):
        row_sets = [set() for _ in range(9)]
        col_sets = [set() for _ in range(9)]
        box_sets = [set() for _ in range(9)]

        for row in range(9):
            for col in range(9):
                val = board[row][col]

                if val == '.':
                    continue

                if val in row_sets[row]:
                    return False
                row_sets[row].add(val)

                if val in col_sets[col]:
                    return False
                col_sets[col].add(val)

                idx = (row//3)*3 + col//3
                if val in box_sets[idx]:
                    return False
                box_sets[idx].add(val)
        return True
    
solution = Solution()
board = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
result = solution.isValidSudoku(board)
print(result)