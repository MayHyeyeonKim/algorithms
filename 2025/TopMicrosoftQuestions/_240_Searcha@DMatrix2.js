/**
 * Searches for a target in a 2D matrix.
 * @param {number[][]} matrix - @D array where each row and column is sorted in ascending order.
 * @param {number} target - The target number to search for.
 * @return {boolean}
 */

function searchMatrix(matrix, target) {
  if (!matrix.length || !matrix[0].length) {
    return false;
  }

  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    const val = matrix[row][col];

    if (val === target) {
      return true;
    } else if (val > target) {
      col--;
    } else {
      row++;
    }
  }

  return false;
}

const target = 5;
const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];

console.log(searchMatrix(matrix, target));
