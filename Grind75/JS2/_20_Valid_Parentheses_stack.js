var isValid = function (s) {
  const stack = [];
  const map = { ")": "(", "}": "{", "]": "[" };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (stack.pop() !== map[char]) {
      return false;
    }
  }
  return stack.length === 0;
};

s = "(){][]";
s1 = "({[]})";
console.log(isValid(s1));
