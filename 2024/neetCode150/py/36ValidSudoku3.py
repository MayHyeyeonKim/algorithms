class Solution:
    def isValidSudoku(self, board):
        row_sets = [set() for _ in range(9)] #[set(), set(), set(), set(), set(), set(), set(), set(), set()] 0~8까지 총9번

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
                # print(f"row_sets: {row_sets}")

                if val in col_sets[col]:
                    return False
                col_sets[col].add(val)
                # print(f"col_sets: {col_sets}")

                idx = (row // 3) * 3 + col // 3
                if val in box_sets[idx]:
                    return False
                box_sets[idx].add(val)
                # print(f"box_sets: {box_sets}")
                # print("=============================")
        return True

#backtracking
    def helper(self, board):
        for i in range(9):
            for j in range(9):
                if board[i][j] == '.':
                    for num in range(1, 10):
                        board[i][j] = str(num)
                        # print(board[i][j])
                        # print(board)
                        # print("====")
                        if self.isValidSudoku(board) and self.helper(board): #현재 스도쿠 보드가 유효하고(중복없고), 재귀적으로 이 helper를 부를거다.
                            return True
                        board[i][j] = '.'
                    return False
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

solution.helper(board)

for row in board:
    print(row)