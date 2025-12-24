// 3354. Make Array Elements Equal to Zero

function countValidSelections(nums) {
  let count = 0;
  let prefix = 0;
  let suffix = nums.reduce((a, b) => a + b, 0);

  for (let i = 0; i < nums.length; i++) {
    prefix += nums[i];
    suffix -= nums[i];

    if (nums[i] !== 0) continue;
    if (prefix === suffix) count += 2;
    if (Math.abs(prefix - suffix) === 1) count++;
  }
  return count;
}

console.log(countValidSelections([0, 1, -1, 0])); // 4
console.log(countValidSelections([0, 0, 0])); // 6
console.log(countValidSelections([1, -1, 0, 0, 2])); // 0
