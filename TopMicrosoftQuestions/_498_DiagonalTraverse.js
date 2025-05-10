// 498. Diagonal Traverse
function findDiagonalOrder(matrix) {
  const map = new Map();
  const ROWS = matrix.length;
  const COLS = matrix[0].length;

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const key = r + c;
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(matrix[r][c]);
    }
  }
  const res = [];
  const maxKey = ROWS + COLS - 1;
  for (let i = 0; i < maxKey; i++) {
    if (map.has(i)) {
      const group = i % 2 === 0 ? map.get(i).reverse() : map.get(i);
      res.push(...group);
    }
  }
  return res;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(findDiagonalOrder(matrix));
