// 20 Valid Parentheses

function isValidfunction(s) {
  const couple = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  let stack = [];

  for (let ele of s) {
    if (ele === "(" || ele === "{" || ele === "[") {
      stack.push(ele);
    } else {
      if (stack.length === 0 || stack[stack.length - 1] !== couple[ele]) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(isValidfunction("()")); // true
console.log(isValidfunction("()[]{}")); // true
console.log(isValidfunction("(]")); // false
console.log(isValidfunction("([)]")); // false
console.log(isValidfunction("{[]}")); // true
