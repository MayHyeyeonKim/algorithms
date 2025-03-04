// ✅ 테스트할 입력값을 직접 변수로 설정
const input = [
  "7 4", // 첫 줄: N(슬롯 개수) K(명령 개수)
  "5 5", // 명령 1: 5번 ~ 5번 슬롯에 블록 추가
  "2 4", // 명령 2: 2번 ~ 4번 슬롯에 블록 추가
  "4 6", // 명령 3: 4번 ~ 6번 슬롯에 블록 추가
  "3 5", // 명령 4: 3번 ~ 5번 슬롯에 블록 추가
];

// 첫 줄에서 N과 K 값 가져오기
const [N, K] = input[0].split(" ").map(Number);

// N개의 칸 (초기 값은 0)
let slots = Array(N + 1).fill(0);

// 블록 쌓기 (각 명령어 처리)
for (let i = 1; i <= K; i++) {
  let [A, B] = input[i].split(" ").map(Number);
  for (let j = A; j <= B; j++) {
    slots[j] += 1;
  }
}

// 가장 많은 블록 개수 출력
console.log(Math.max(...slots.slice(1))); // 0번 인덱스 제외하고 계산
