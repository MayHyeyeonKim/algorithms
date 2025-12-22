// 2656. Maximum Sum With Exactly K Elements

/**
 *
 * 문제 설명:
 * 주어진 배열 nums에서 가장 큰 값을 선택해 합에 더하고, 선택된 값은 1 증가한 뒤 다시 배열에 넣는다. 이 과정을 정확히 k번 반복했을 때 얻을 수 있는 최대 합을 반환한다.
 * @param {*} nums
 * @param {*} k
 * @returns
 */

function maxumWithKElements(nums, k) {
  const m = Math.max(...nums);
  return m * k + (k * (k - 1)) / 2;
}

console.log(maxumWithKElements([1, 2, 3, 4, 5], 3)); // 18
console.log(maxumWithKElements([5, 5, 5], 2)); // 11
console.log(maxumWithKElements([10, 20, 30], 5)); // 160
