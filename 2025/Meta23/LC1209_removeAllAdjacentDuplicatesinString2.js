var removeDuplicates = function (s, k) {
  let stack = [];
  for (let char of s) {
    if (stack.length > 0 && stack[stack.length - 1][0] === char) {
      stack[stack.length - 1][1] += 1;
    } else {
      stack.push([char, 1]);
    }
    if (stack[stack.length - 1][1] === k) {
      stack.pop();
    }
  }
  let result = "";
  for (let [char, count] of stack) {
    result += char.repeat(count);
  }
  return result;
};

let s = "deeed";
let k = 3;

res = removeDuplicates(s, k);
console.log(res);
