//  34. Find First and Last Position of Element in Sorted Array

var searchRange = function (nums, target) {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      res.push(i);
    }
  }

  if (res.length === 0) {
    return [-1, -1];
  }
  return [res[0], res[res.length - 1]];
};
