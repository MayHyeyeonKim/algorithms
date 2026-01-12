// 268. Missing Number

function missingNumber(nums) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    n += i - nums[i];
  }
  return n;
}

/**
우리는 지금 3번만 들고 시작했다.
그래서 0,1,2를 먼저 넣고,
들고 있는 3,0,1을 빼면
2번만 상자에 남는다
 */

// xor 연산으로 할 수 있겠지
