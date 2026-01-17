// ASCII to Integer

function myAtoi(s) {
  const result = Number.parseInt(s);
  if (result) {
    if (result <= -2147483648) return -2147483648;
    else if (result >= 2147483647) return 2147483647;
    else return result;
  }
  return 0;
}

console.log(myAtoi("42")); // 42
console.log(myAtoi("   -42")); // -42
console.log(myAtoi("4193 with words")); // 4193
console.log(myAtoi("words and 987")); // 0
console.log(myAtoi("-91283472332")); // -2147483648
