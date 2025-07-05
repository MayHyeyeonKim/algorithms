// 1275. Find Winner on a Tic Tac Toe Game

/**
 * 
 * @param {*} moves 

3x3 게임판에서 두 플레이어가 번갈아가며 X와 O를 놓습니다.
첫 번째 플레이어는 X를, 두 번째 플레이어는 O를 사용합니다.
moves 배열에는 각 플레이어가 돌을 놓은 위치가 [row, col] 형태로 순서대로 저장되어 있습니다.
승자가 결정되면 "A"(X 플레이어) 또는 "B"(O 플레이어)를 반환합니다.
무승부면 "Draw"를 반환합니다.
게임이 아직 진행 중이면 "Pending"을 반환합니다.

3x3 게임판을 2차원 배열로 표현합니다.
각 플레이어의 이동을 순서대로 게임판에 기록합니다.
매 이동 후 승리 조건을 확인합니다:
가로 3개
세로 3개
대각선 2개
승자가 없고 모든 칸이 채워졌으면 "Draw"
승자가 없고 빈 칸이 있으면 "Pending"

 */

function findWinner(moves) {
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  // 각 플레이어의 이동을 게임판에 기록하기
  for (let i = 0; i < moves.length; i++) {
    const [row, col] = moves[i];
    board[row][col] = i % 2 === 0 ? "X" : "O";
  }
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  for (let i = 0; i < moves.length; i++) {
    const [row, col] = moves[i];
    board[row][col] = i % 2 === 0 ? "X" : "O";
  }

  console.log("boardddd: ", board);

  const checkWinner = (player) => {
    //가로
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
        return true;
      }
    }

    //세로
    for (let i = 0; i < 3; i++) {
      if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
        return true;
      }
    }

    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
      return true;
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
      return true;
    }
    return false;
  };

  if (checkWinner("X")) return "A";
  if (checkWinner("O")) return "B";

  return moves.length === 9 ? "Draw" : "Pending";
}

let moves = [
  [0, 0],
  [2, 0],
  [1, 1],
  [2, 1],
  [2, 2],
];
console.log(findWinner(moves));
