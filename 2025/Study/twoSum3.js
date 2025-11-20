// 170. Two Sum III - Data structure design

class TwoSum {
  constructor() {
    this.nums = [];
    this.isSorted = false;
  }
}

TwoSum.prototype.add = function (number) {
  this.nums.push(number);
  this.isSorted = false;
};

TwoSum.prototype.find = function (value) {
  if (!this.isSorted) {
    this.nums.sort((a, b) => a - b);
    this.isSorted = true;
  }

  let left = 0;
  let right = this.nums.length - 1;

  while (left < right) {
    const sum = this.nums[left] + this.nums[right];
    if (sum === value) {
      return true;
    } else if (sum < value) {
      left++;
    } else {
      right--;
    }
  }

  return false;
};

// Example usage:
const twoSum = new TwoSum();
twoSum.add(1);
twoSum.add(3);
twoSum.add(5);
console.log(twoSum.find(4)); // true
console.log(twoSum.find(7)); // false
