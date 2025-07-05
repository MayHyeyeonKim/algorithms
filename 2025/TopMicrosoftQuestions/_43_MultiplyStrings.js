// 43. Multiply Strings -

/**
    123
x   456
-------
    738   (123 * 6)
   615    (123 * 5, shift 1)
  492     (123 * 4, shift 2)
-------
 56088
 
 */

function multiply(num1, num2) {
  const n = num1.length,
    m = num2.length;
  const result = Array(n + m).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      const mul = (num1[i] - "0") * (num2[j] - "0");
      const sum = mul + result[i + j + 1];
      result[i + j + 1] = sum % 10;
      result[i + j] += Math.floor(sum / 10);
    }
  }

  while (result[0] === 0 && result.length > 1) result.shift();
  return result.join("");
}

const num1 = "2";
const num2 = "3";
console.log(multiply(num1, num2)); // Output: "6"
