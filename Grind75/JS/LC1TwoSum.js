// Approach 1: Brute Force
function twoSum1(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum1(nums1, target1));

// Approach 2: Using a Hash Map
function twoSum2(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

const nums2 = [2, 7, 11, 15];
const target2 = 9;
console.log(twoSum2(nums2, target2));

// Approach 3: Two Pointers (For sorted arrays)
function twoSumTwoPointers(nums, target) {
    const indexedNums = nums.map((num, index) => [num, index]);
    indexedNums.sort((a, b) => a[0] - b[0]);

    let left = 0;
    let right = indexedNums.length - 1;

    while (left < right) {
        const sum = indexedNums[left][0] + indexedNums[right][0];
        if (sum === target) {
            return [indexedNums[left][1], indexedNums[right][1]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}

const nums3 = [2, 7, 11, 15];
const target3 = 9;
console.log(twoSumTwoPointers(nums3, target3));
