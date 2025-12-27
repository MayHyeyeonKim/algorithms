// 2226. Maximum Candies Allocated to K Children

function maximumCandies(candies, k) {
  let right = 0;
  for (const c of candies) right = Math.max(right, c);

  let left = 1;
  let answer = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let bundles = 0;
    for (const c of candies) {
      bundles += Math.floor(c / mid);
    }

    if (bundles >= k) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return answer;
}

console.log(maximumCandies([5, 8, 6], 3)); // 5
console.log(maximumCandies([2, 5], 11)); // 0
console.log(maximumCandies([9, 7, 5], 3)); // 5
console.log(maximumCandies([1, 2, 3, 4, 5, 6], 10)); // 1
console.log(maximumCandies([10, 10, 10], 3)); // 10
console.log(maximumCandies([10, 10, 10], 4)); // 5
