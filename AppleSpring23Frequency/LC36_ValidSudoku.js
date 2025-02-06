var isValidSudoku = function (board) {
  let rows = new Array(9).fill(0).map(() => new Set());
  let cols = new Array(9).fill(0).map(() => new Set());
  let boxes = new Array(9).fill(0).map(() => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let num = board[r][c];
      if (num === ".") continue; // 빈 칸이면 넘어감

      let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      if (rows[r].has(num) || cols[c].has(num) || boxes[boxIndex].has(num)) {
        return false; // 중복 숫자 발견 시 false 반환
      }

      rows[r].add(num);
      cols[c].add(num);
      boxes[boxIndex].add(num);
    }
  }
  return true; // 중복이 없으면 true
};

board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
