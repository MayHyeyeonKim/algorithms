// 7. Reverse Integer

function reverse(x) {
  const sign = Math.sign(x);
  const reversed = parseInt(Math.abs(x).toString().split("").reverse().join(""));
  const result = sign * reversed;

  return result < -(2 ** 31) || result > 2 ** 31 - 1 ? 0 : result;
}

console.log(reverse(123)); // 321
console.log(reverse(-123));
