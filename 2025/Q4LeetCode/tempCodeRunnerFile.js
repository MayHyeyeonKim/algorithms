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

const depthSum = (nestedList) => {
  const dfs = (list, depth) => {
    let sum = 0;
    for (const ni of list) {
      if (ni.isInteger()) {
        sum += ni.getInteger() * depth;
      } else {
        sum += dfs(ni.getList(), depth + 1);
      }
    }
    return sum;
  };
  return dfs(nestedList, 1);
};
