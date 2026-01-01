// NestedInteger class: holds either a single integer or a nested list of integers
class NestedInteger {
  constructor(value) {
    if (Array.isArray(value)) {
      this.list = value;
      this.integer = null;
    } else {
      this.integer = value;
      this.list = null;
    }
  }
  // Returns true if this holds a single integer
  isInteger() {
    return this.integer !== null;
  }
  // Returns the single integer, or null
  getInteger() {
    return this.integer;
  }
  // Returns the nested list, or null
  getList() {
    return this.list;
  }
}

// Calculates the weighted sum of a nested list
const depthSum = (nestedList) => {
  const helper = (list, depth) => {
    let sum = 0;
    for (const ni of list) {
      if (ni.isInteger()) {
        sum += ni.getInteger() * depth;
      } else {
        sum += helper(ni.getList(), depth + 1);
      }
    }
    return sum;
  };
  return helper(nestedList, 1);
};

// Example usage
const nestedList = [
  new NestedInteger(1),
  new NestedInteger([new NestedInteger(4), new NestedInteger([new NestedInteger(6)])]),
];
console.log(depthSum(nestedList)); // Output: 27
