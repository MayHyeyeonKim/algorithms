/**
 * 209. Minimum Size Subarray Sum
 * Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target.
 * If there is no such subarray, return 0 instead.
 *
 * Input: target = 7, nums = [2,3,1,2,4,3] Output: 2
 * Explanation: The subarray [4,3] has the minimal length under the problem constraint.
 *
 * 슬라이딩 윈도우로 풀면 되겠지
 * 1. start - end는 배열의 맨 처음에서 시작하기
 * 2. end를 오른쪽으로 옮기며 현재 부분 배열의 합을 계산
 * 3. 부분 배열의 합이 target이상이면:
 *      현재 길이를 기록
 *      그리고 start를 오른쪽으로 옮겨가며 배열을 더 짧게 만듦
 * 4. 이 과정을 end가 배열의 끝까지 갈 때까지 반복한다
 * 5. 최종적으로 가장 짧은 길이를 반환한다. 만약 합계가 target이상인 배열이 없으면 0 반환
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let minLength = Infinity;
  let sum = 0;
  let start = 0;

  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];
    while (sum >= target) {
      minLength = Math.min(minLength, end - start + 1);
      sum -= nums[start];
      start++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
