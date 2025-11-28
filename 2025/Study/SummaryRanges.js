// 228. Summary Ranges

const SummaryRanges = (nums) => {
  const result = [];
  let start = 0;

  if (nums.length === 0) return result;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] + 1) {
      if (start === i - 1) {
        result.push(String(nums[start]));
      } else {
        result.push(nums[start] + "->" + nums[i - 1]);
      }
      start = i;
    }
  }

  if (start === nums.length - 1) {
    result.push(String(nums[start]));
  } else {
    result.push(nums[start] + "->" + nums[nums.length - 1]);
  }

  return result;
};

console.log(SummaryRanges([0, 1, 2, 4, 5, 7])); // ["0->2", "4->5", "7"]
console.log(SummaryRanges([0, 2, 3, 4, 6, 8, 9])); // ["0", "2->4", "6", "8->9"]
