function dateDifference(input) {
  let [m1, d1, m2, d2] = input.split(" ").map(Number);

  // 각 달의 정확한 일 수 (12월이 31일로 수정됨!)
  const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // 같은 달이면 단순 계산
  if (m1 === m2) {
    console.log(d2 - d1 + 1);
    return;
  }

  // 첫 번째 달의 남은 일 수
  let totalDays = daysInMonth[m1] - d1 + 1;

  // 중간 달의 총 일수 추가
  for (let month = m1 + 1; month < m2; month++) {
    totalDays += daysInMonth[month];
  }

  // 마지막 달의 지난 날짜 추가 (여기서 +1 추가할 필요 없음)
  totalDays += d2;

  console.log(totalDays);
}

// 테스트 실행
dateDifference("11 5 12 21"); // 47
