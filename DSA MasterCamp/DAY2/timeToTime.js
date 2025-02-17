function timeDifference(input) {
  // 입력이 배열로 들어올 수도 있으므로 join 사용
  if (Array.isArray(input)) {
    input = input.join(" ");
  }

  // 입력값을 정리하고 숫자로 변환
  let [A, B, C, D] = input.trim().split(/\s+/).map(Number);

  // 시간을 분 단위로 변환
  let startMinutes = A * 60 + B;
  let endMinutes = C * 60 + D;

  // 경과 시간 계산
  let elapsedMinutes = endMinutes - startMinutes;

  // 온라인 저지는 console.log 필요할 가능성이 높음
  console.log(elapsedMinutes);
}

// 직접 실행 테스트
timeDifference("2 5 4 1"); // 예상 출력: 116
