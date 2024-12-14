var increasingTriplet = function (nums) {
  let first = Infinity;
  let second = Infinity;

  for (let num of nums) {
    if (num <= first) {
      first = num; // 첫 번째로 작은 숫자를 업데이트
    } else if (num <= second) {
      second = num; // 두 번째로 작은 숫자를 업데이트
    } else {
      return true; // 세 번째로 큰 숫자를 찾으면 true 반환
    }
  }

  return false; // 트리플릿을 찾지 못하면 false 반환
};
