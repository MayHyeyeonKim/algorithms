// 45. Jump Game II
/**
 * 이 문제는 **Greedy Algorithm (탐욕 알고리즘)**을 사용하여 효율적으로 해결할 수 있습니다.

아이디어:

점프를 최소화하려면 최대한 멀리 점프할 수 있는 위치를 선택해야 합니다.
현재 점프의 범위 내에서 다음 점프의 최대 도달 가능 거리를 계산하여 점프 횟수를 증가시킵니다.

해결 방법:
steps 변수로 현재까지의 점프 횟수를 추적.
currentEnd는 현재 점프 내에서 도달 가능한 최대 위치를 나타냄.
farthest는 현재 점프 내에서 다음 점프의 최대 도달 거리를 계산.
배열을 순회하며 farthest를 업데이트.
현재 인덱스가 currentEnd에 도달하면 점프 횟수를 증가하고, currentEnd를 farthest로 갱신.

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let steps = 0; // Number of jumps
  let currentEnd = 0; // End of the current jump range
  let farthest = 0; // Farthest point we can reach

  for (let i = 0; i < nums.length - 1; i++) {
    // Update the farthest point we can reach
    farthest = Math.max(farthest, i + nums[i]);

    // If we've reached the end of the current jump range
    if (i === currentEnd) {
      steps++; // Increment the jump counter
      currentEnd = farthest; // Move to the next jump range
    }
  }

  return steps;
};
