// ✅ 테스트할 입력값을 직접 변수로 설정
const input = [
  "3", // 첫 줄: 구간 개수 N
  "1 5", // 구간 1: [1, 5]
  "4 6", // 구간 2: [4, 6]
  "3 5", // 구간 3: [3, 5]
];

// 첫 줄: 구간 개수 N
const N = Number(input[0]);

// 이벤트 배열
let events = [];

// 구간 입력 처리
for (let i = 1; i <= N; i++) {
  let [start, end] = input[i].split(" ").map(Number);
  events.push([start, 1]); // 시작점 +1
  events.push([end, -1]); // 끝점 -1
}

// 시작점과 끝점을 정렬 (시간순으로)
events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

// 최대 겹치는 구간 찾기
let maxOverlap = 0;
let currentOverlap = 0;

for (let event of events) {
  currentOverlap += event[1]; // 현재 겹치는 개수 업데이트
  maxOverlap = Math.max(maxOverlap, currentOverlap);
}

// 결과 출력
console.log(maxOverlap);
