// 163. Missing Ranges

function missingRanges(nums, lower, upper) {
  let result = [];
  let prev = lower - 1;

  for (let i = 0; i <= nums.length; i++) {
    let curr;

    if (i < nums.length) {
      curr = nums[i];
    } else {
      curr = upper + 1;
    }

    if (curr - prev >= 2) {
      const start = prev + 1;
      const end = curr - 1;

      if (start === end) {
        result.push([`${start}`]);
      } else {
        result.push([`${start},${end}`]);
      }
    }
    prev = curr;
  }
  return result;
}

console.log(missingRanges([0, 1, 3, 50, 75], 0, 99)); // [["2"],["4->49"],["51->74"],["76->99"]]
