/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // target not found
};

// Example usage:
console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); // Output: 4
console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // Output: -1
