// 303. Range Sum Query - Immutable

function NumArray(nums) {
  this.prefix = [0];

  for (let n of nums) {
    this.prefix.push(this.prefix[this.prefix.length - 1] + n);
  }
}

NumArray.prototype.sumRange = function (left, right) {
  return this.prefix[right + 1] - this.prefix[left];
};

// Example usage:
const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2)); // Output: 1
console.log(numArray.sumRange(2, 5)); // Output: -1
console.log(numArray.sumRange(0, 5)); // Output: -3
