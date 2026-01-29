// 300. Longest Increasing Subsequence

// The longest subsequence that is strictly increasing and keeps the original order

function lengthOfLIS(nums) {
  const tails = [];

  for (const x of nums) {
    let left = 0;
    let right = tails.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (tails[mid] < x) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    if (left === tails.length) {
      tails.push(x);
    } else {
      tails[left] = x;
    }
  }
  return tails.length;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4
