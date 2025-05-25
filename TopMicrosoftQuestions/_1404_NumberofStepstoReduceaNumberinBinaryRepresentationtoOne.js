//1404. Number of Steps to Reduce a Number in Binary Representation to One

/**
      1    1    0    1   <- 이진수 1101
    (2^3)(2^2)(2^1)(2^0)
      8 + 4 + 0 + 1 = 13
*/

function numSteps(s) {
  let num = BigInt("0b" + s);
  let steps = 0;

  while (num > 1n) {
    if (num % 2n === 0n) {
      num /= 2n;
    } else {
      num += 1n;
    }
    steps++;
  }
  return steps;
}

let num = "1101";
console.log(numSteps(num));
