var twoSum = function (nums, target) {
  const indexedNums = nums.map((val, idx) => [val, idx]);
  indexedNums.sort((a, b) => a[0] - b[0]);

  let start = 0;
  let end = indexedNums.length - 1;

  while (start < end) {
    const sum = indexedNums[start][0] + indexedNums[end][0];

    if (sum === target) {
      return [indexedNums[start][1], indexedNums[end][1]];
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
  return [];
};
nums = [2, 7, 11, 15];
target = 9;
console.log(twoSum(nums, target));
