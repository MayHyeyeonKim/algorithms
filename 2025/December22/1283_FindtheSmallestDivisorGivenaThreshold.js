// 1283. Find the Smallest Divisor Given a Threshold

// function smallestDivisor(nums, threshold) {
//   let max = Math.max(...nums);

//   for (let d = 1; d <= max; d++) {
//     let sum = 0;

//     for (let n of nums) {
//       sum += Math.ceil(n / d);
//     }

//     if (sum <= threshold) {
//       return d;
//     }
//   }
// }

/**
 * 브루트포스라서 TLE 발생
 * 이진 탐색으로 해결 해야 함.
 */

function smallestDivisor(nums, threshold) {
  let left = 1;
  let right = Math.max(...nums);

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let sum = 0;

    for (let n of nums) {
      sum += Math.ceil(n / mid);
    }

    if (sum <= threshold) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
console.log(smallestDivisor([1, 2, 5, 9], 6)); // 5
console.log(smallestDivisor([2, 3, 5, 7, 11], 11)); // 3
console.log(smallestDivisor([19], 5)); // 4
