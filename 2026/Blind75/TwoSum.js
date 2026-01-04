/**
I can think of three common approaches to solve the Two Sum problem:
    1. Brute Force Approach
    2. Using a Hash Map
    3. Two-Pointer Technique (only works on sorted arrays)
 */

// 1. Brute Force Approach
function twoSumBruteForce(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

// 2. Using a Hash Map
function twoSumHashMap(nums, target) {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
  return [];
}

// 3. Two-Pointer Technique (only works on sorted arrays)
function twoSumTwoPointer(nums, target) {
  const sortedNums = nums.map((num, index) => [num, index]).sort((a, b) => a[0] - b[0]);
  let left = 0,
    right = sortedNums.length - 1;
  while (left < right) {
    const sum = sortedNums[left][0] + sortedNums[right][0];
    if (sum === target) {
      return [sortedNums[left][1], sortedNums[right][1]];
    }
    sum < target ? left++ : right--;
  }
  return [];
}

console.log(twoSumBruteForce([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSumHashMap([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSumTwoPointer([2, 7, 11, 15], 9)); // Output: [0, 1]

/**
 * Time Complexity:
 * - Brute Force: O(n^2)
 * - Hash Map: O(n)
 * - Two-Pointer: O(n log n) due to sorting
 *
 * Space Complexity:
 * - Brute Force: O(1)
 * - Hash Map: O(n)
 * - Two-Pointer: O(n) for the sorted array copy
 */
