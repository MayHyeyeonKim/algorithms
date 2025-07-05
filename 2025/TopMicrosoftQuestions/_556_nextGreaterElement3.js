// 556. Next Greater Element III
/**
1 2 5 4 3
1. 역방향 순회
2. 뒤에서부터 보면서 오름차순 깨지는 지점 찾기
이 때 그럼 2가 left가 됨. (여기서 오름차순이 깨지니까)
3. left보다 큰 수들중에 작은 수 찾기
- 뒤에서 부터 보면 3,4,5가 right가 될 후보!
- 후보들 중에 left보다는 크면서 제일 작은건 3 -> 그래서 right는 3이 됨.
4. left랑 right이랑 스왑! -> 이 순간에 1,3,5,4,2가 됨
5. left 뒤의 값들 이제 오름차순 정렬하기 -> 1,3,2,4,5 <- 이게 정답!
 */

var nextGreaterElement = function (n) {
  let digits = String(n).split("");
  let length = digits.length;

  // 1. 뒤에서부터 감소 지점 찾기
  let i = length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i--;
  }
  if (i < 0) return -1;

  // 2. digits[i]보다 큰 수 중 가장 끝에 있는 것 찾기
  let j = length - 1;
  while (j >= 0 && digits[j] <= digits[i]) {
    j--;
  }

  // 3. swap
  [digits[i], digits[j]] = [digits[j], digits[i]];

  // 4. i+1부터 끝까지 뒤집기
  let left = i + 1,
    right = length - 1;
  while (left < right) {
    [digits[left], digits[right]] = [digits[right], digits[left]];
    left++;
    right--;
  }

  // 5. 숫자로 바꾸고 범위 체크
  let next = parseInt(digits.join(""), 10);
  return next < 2 ** 31 ? next : -1;
};

console.log(nextGreaterElement(12543)); // 출력: 13245
console.log(nextGreaterElement(21)); // 출력: -1
console.log(nextGreaterElement(123)); // 출력: 132
console.log(nextGreaterElement(1999999999)); // 출력: -1
