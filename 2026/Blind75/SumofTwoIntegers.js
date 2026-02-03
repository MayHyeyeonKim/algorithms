// 371. Sum of Two Integers

function getSum(a, b) {
  let carry;
  while ((a & b) !== 0) {
    carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a ^ b;
}

console.log(getSum(1, 2));
console.log(getSum(-1, 1));
console.log(getSum(5, 7));

/**
& : Bitwise AND (AND operator)
^ : Bitwise XOR (Exclusive OR operator)
 */
