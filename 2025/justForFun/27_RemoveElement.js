// 27. Remove Element

const removedElement1 = (nums, val) => {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};

const removedElement2 = (nums, val) => {
  const filtered = nums.filter((n) => n !== val);
  nums.length = 0;
  nums.push(...filtered);
  return nums.length;
};

console.log(removedElement1([3, 2, 2, 3], 3)); // 2
console.log(removedElement2([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
