class MinStack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    let minVal = this.getMin();
    if (minVal === null || val < minVal) {
      minVal = val;
    }
    this.stack.push({ val, minVal });
  }

  getMin() {
    if (this.stack.length === 0) return null;
    return this.stack[this.stack.length - 1].minVal;
  }

  pop() {
    if (this.stack.length > 0) {
      return this.stack.pop().val;
    }
  }

  top() {
    if (this.stack.length === 0) return null;
    return this.stack[this.stack.length - 1].val;
  }
}

const minStack = new MinStack();
minStack.push(1);
minStack.push(0);
minStack.push(2);
minStack.push(3);

console.log(minStack.getMin());
console.log(minStack.top());
console.log(minStack.pop());
