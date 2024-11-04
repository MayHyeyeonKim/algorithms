/**
 * Non-decreasing order (오름차순): [1, 2, 2, 3, 4] - 값이 커지거나 같은 방향으로만
 * Strictly increasing order (엄격한 오름차순): [1, 2, 3, 4] - 값이 항상 커져야 하며, 같은 값이 있으면 안 됨
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let midx = m - 1;
  let nidx = n - 1;
  let right = m + n - 1;

  while (nidx >= 0) {
    if (midx >= 0 && nums1[midx] > nums2[nidx]) {
      nums1[right] = nums1[midx];
      midx--;
    } else {
      nums1[right] = nums2[nidx];
      nidx--;
    }
    right--;
  }
};

// 테스트 케이스
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // [1, 2, 2, 3, 5, 6]
