// 339. Nested List Weight Sum
/**
각 정수에 대해 깊이(depth)를 고려해서 가중치 합을 구하는 문제

Input: [[1,1], 2, [1,1]]
Output: 10

1 at depth 2 → 1×2 = 2 (두 번) → 2 + 2 = 4
2 at depth 1 → 2×1 = 2

또 1 at depth 2 → 1×2 = 2 (두 번) → 2 + 2 = 4
총합: 4 + 2 + 4 = 10

 */

class NestedInteger {
  constructor(value) {
    if (Array.isArray(value)) {
      this.list = value.map((v) => new NestedInteger(v));
      this.integer = null;
    } else {
      this.integer = value;
      this.list = null;
    }
  }

  isInteger() {
    return this.integer !== null;
  }

  getInteger() {
    return this.integer;
  }

  getList() {
    return this.list;
  }
}

function nestedListWeightSum(nestedList) {
  function dfs(list, depth) {
    let sum = 0;

    for (const ni of list) {
      if (ni.isInteger()) {
        sum += ni.getInteger() * depth;
      } else {
        sum += dfs(ni.getList(), depth + 1);
      }
    }

    return sum;
  }

  return dfs(nestedList, 1);
}

// let nestedList = [[1, 1], 2, [1, 1]];
// console.log(nestedListWeightSum(nestedList)); // Output: 10

const nestedList = [new NestedInteger([1, 1]), new NestedInteger(2), new NestedInteger([1, 1])];

console.log(nestedListWeightSum(nestedList)); // 출력: 10
