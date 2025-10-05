const calculate = (s) => {
  s = s.trim();
  //   console.log("s => ", s);
  let stack = [];
  let sign = "+";
  let num = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (!isNaN(char) && char !== " ") {
      num = num * 10 + Number(char);
    }

    if ((isNaN(char) && char !== " ") || i === s.length - 1) {
      if (sign === "+") {
        stack.push(num);
      } else if (sign === "-") {
        stack.push(-num);
      } else if (sign === "*") {
        stack.push(stack.pop() * num);
      } else if (sign === "/") {
        stack.push(Math.trunc(stack.pop() / num));
      }
      sign = char;
      num = 0;
    }
  }
  return stack.reduce((a, b) => a + b, 0);
};

console.log(calculate("3+2*2")); // 7
