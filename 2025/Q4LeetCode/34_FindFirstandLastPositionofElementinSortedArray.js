//  34. Find First and Last Position of Element in Sorted Array

// O(n)
// const searchRange = function (nums, target) {
//   const res = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       res.push(i);
//     }
//   }

//   if (res.length === 0) {
//     return [-1, -1];
//   }
//   return [res[0], res[res.length - 1]];
// };

// O(n log n)

const searchRange = function (nums, target) {
  const findLeft = () => {
    let left = 0;
    let right = nums.length - 1;
    let answer = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] >= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
      if (nums[mid] === target) answer = mid;
    }
    return answer;
  };

  const findRight = () => {
    let left = 0;
    let right = nums.length - 1;
    let answer = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
      if (nums[mid] === target) answer = mid;
    }
    return answer;
  };

  return [findLeft(), findRight()];
};
