// 1249. Minimum Remove to Make Valid Parentheses

const minRemoveToMakeValid = (s) => {
  const remove = new Set();
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      if (stack.length === 0) {
        remove.add(i);
      } else {
        stack.pop();
      }
    }
  }

  for (let i of stack) {
    remove.add(i);
  }

  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (!remove.has(i)) {
      result += s[i];
    }
  }

  return result;
};

const s = "lee(t(c)o)de)";
console.log(minRemoveToMakeValid(s)); // "lee(t(c)o)de"
