//1427. Perform String Shifts

/**
1. net_shift = 0
2. 모든 shift를 순회하며 net_shift 계산
   - 0이면 왼쪽 이동 (빼기)
   - 1이면 오른쪽 이동 (더하기)
3. net_shift를 문자열 길이로 나눈 나머지 계산
4. net_shift가 0이면 그대로 반환
5. 음수면 왼쪽 이동, 양수면 오른쪽 이동
6. 결과 문자열 반환
 */

function stringShift(s, shift) {
  let netShift = 0;

  // 1. 이동량 계산
  for (let [direction, amount] of shift) {
    netShift += direction === 1 ? amount : -amount;
  }

  // 2. 문자열 길이를 초과하는 이동량을 줄이기
  let length = s.length;
  netShift = netShift % length;

  // 3. 이동량이 0이면 그대로 반환
  if (netShift === 0) return s;

  // 4. 오른쪽 이동 (양수) vs 왼쪽 이동 (음수)
  if (netShift > 0) {
    return s.slice(-netShift) + s.slice(0, -netShift);
  } else {
    return s.slice(-netShift) + s.slice(0, -netShift);
  }
}

// 테스트
console.log(
  stringShift("abcdefg", [
    [1, 1],
    [1, 1],
    [0, 2],
    [1, 3],
  ])
); // "efgabcd"
console.log(
  stringShift("abcdefg", [
    [0, 1],
    [1, 2],
  ])
); // "gabcdef"
