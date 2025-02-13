// var isValid = function (s) {};
const isValid = (s) => {
  let stk = [];
  const pair = { ")": "(", "}": "{", "]": "[" };
  for (let c of s) {
    if (c === "(" || c === "{" || c === "[") {
      stk.push(c);
    } else {
      if (stk.length === 0 || stk[stk.length - 1] !== pair[c]) {
        return false;
      }
      stk.pop();
    }
  }
  return stk.length === 0;
};

s = "(){}[]";
s1 = "(}";
console.log(isValid(s1));
