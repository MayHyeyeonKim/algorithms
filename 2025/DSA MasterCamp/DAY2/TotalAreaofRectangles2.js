/**
주어진 N개의 사각형이 2D 평면 위에 위치해 있다.
각 사각형의 좌표 (x1, y1, x2, y2)가 주어지며, (x1, y1)은 왼쪽 아래 모서리, (x2, y2)는 오른쪽 위 모서리를 의미한다.

목표:
모든 사각형이 차지하는 총 면적을 계산하여 출력하는 프로그램을 작성한다.
겹치는 부분은 중복 계산하면 안 된다.
 */

function totalRectangleArea(input) {
  let lines = input.trim().split("\n");
  let N = parseInt(lines[0]);

  let covered = new Set(); // 중복 제거를 위한 Set

  for (let i = 1; i <= N; i++) {
    let [x1, y1, x2, y2] = lines[i].split(" ").map(Number);

    // 모든 좌표를 Set에 저장하여 중복 제거
    for (let x = x1; x < x2; x++) {
      // x2 포함 안 함 (문제 조건)
      for (let y = y1; y < y2; y++) {
        // y2 포함 안 함
        covered.add(`${x},${y}`);
      }
    }
  }

  console.log(covered.size);
}

// ✅ 예제 테스트 실행
const input = `2
0 1 4 5
2 2 6 4`;
totalRectangleArea(input); // 출력: 20
