const twoSum = function (nums, target) {
  const updatedNums = nums.map((num, idx) => [num, idx]);
  updatedNums.sort((a, b) => a[0] - b[0]);

  let left = 0;
  let right = updatedNums.length - 1;

  while (left < right) {
    const sum = updatedNums[left][0] + updatedNums[right][0];
    if (sum === target) {
      return [updatedNums[left][1], updatedNums[right][1]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
};

/**

Outside the while loop, left and right should be declared with let, not const.
Inside the while loop, the sum variable can be declared with const.

 */
