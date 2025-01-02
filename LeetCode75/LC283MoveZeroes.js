/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left = 0; // 0이 아닌 숫자가 들어갈 자리

  // 0이 아닌 숫자를 앞으로 이동
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      // 현재 숫자와 left 자리를 바꿔
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++; // 다음 자리로 이동
    }
  }
};
