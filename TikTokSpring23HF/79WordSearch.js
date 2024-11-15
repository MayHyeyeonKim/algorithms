// 79. Word Search

/**
 * 이 문제는 글자 퍼즐 찾기 게임. 
 * 주어진 격자(board) 안에서 특정 단어(word)가 만들어질 수 있는지 확인하는 거. 
 * 글자들은 가로 또는 세로로 연결된 칸들에서 차례대로 사용해서 만들어야 하고, 같은 칸은 한 번만 사용할 수 있음
 * 
1. 격자 안에서 단어의 첫 글자를 찾고
2. 첫 글자를 찾았으면, 상하좌우로 이동하면서 단어의 두 번째 글자를 찾고
3. 글자 하나씩 이동하면서 단어를 완성해 나가
4. 만약 도중에 틀리거나 갈 곳이 없으면, 뒤로 돌아가서 다른 경로를 시도해
5. 격자 전체를 다 돌아봐서 단어를 찾을 수 있으면 true, 못 찾으면 false를 반환해

한 칸은 한 번만 사용 가능. 그래서 사용한 칸은 임시로 표시하거나 기억해놔야 해.
글자가 맞지 않거나 더 갈 곳이 없으면, **되돌아가기(백트래킹)**를 해야 해.

 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;

  // DFS 함수: 현재 위치에서 단어를 찾는지 확인
  const dfs = (row, col, index) => {
    // 단어를 다 찾았으면 true 반환
    if (index === word.length) return true;

    // 격자 범위를 벗어나거나, 글자가 다르거나, 이미 방문한 칸이면 false
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    // 방문 표시를 위해 현재 칸을 임시로 변경
    const temp = board[row][col];
    board[row][col] = "#";

    // 상, 하, 좌, 우로 이동하면서 단어를 찾음
    const found =
      dfs(row + 1, col, index + 1) || // 아래
      dfs(row - 1, col, index + 1) || // 위
      dfs(row, col + 1, index + 1) || // 오른쪽
      dfs(row, col - 1, index + 1); // 왼쪽

    // 되돌아가기 위해 칸 원래 상태로 복원
    board[row][col] = temp;

    return found;
  };

  // 격자 전체를 순회하면서 단어의 첫 글자를 찾기 시작
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j, 0)) {
        return true; // 단어를 찾으면 true 반환
      }
    }
  }

  return false; // 못 찾으면 false 반환
};

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

console.log(exist(board, "ABCCED")); // true
console.log(exist(board, "SEE")); // true
console.log(exist(board, "ABCB")); // false

/**
 * 추가로 생각할 질문들:

이 코드에서 방문했던 칸을 표시하는 방식 대신, 별도의 배열을 사용하면 어떻게 될까?
큰 격자에서 효율적으로 탐색하려면 어떤 최적화를 추가할 수 있을까?
글자의 빈도수를 미리 계산해서 불필요한 탐색을 줄이는 방법은 무엇일까?
 */
