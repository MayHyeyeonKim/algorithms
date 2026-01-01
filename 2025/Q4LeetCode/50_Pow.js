// 50. Pow(x, n)

/**

x^n = x를 n번 곱하기

x^0 = 1
x^1 = x
x^2 = x * x
x^3 = x * x * x
x^4 = x * x * x * x
...
많이 곱할 거를 두 배씩 껑충 뛰면서 몇 번만에 끝내기
x^4 = (x^2)^2
x^5 = (x^2)^2 * x
x^6 = (x^3)^2
x^7 = (x^3)^2 * x
x^8 = (x^4)^2
...

n이 짝수일 때: (x^(n/2))^2
n이 홀수일 때: (x^(n//2))^2 * x
    
n이 음수일 때: 1 / (x^-n)

 */

var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  function fastPow(a, b) {
    if (b === 0) return 1;
    const half = fastPow(a, Math.floor(b / 2));
    return b % 2 === 0 ? half * half : half * half * a;
  }

  return fastPow(x, n);
};

// Time Complexity: O(log n)
// Space Complexity: O(log n) - 재귀 호출 스택

// Example 1:
// Input: x = 2.00000, n = 10
// Output: 1024.00000

// Example 2:
// Input: x = 2.10000, n = 3
// Output: 9.26100

console.log(myPow(2.0, 10)); // 1024.00000
console.log(myPow(2.1, 3)); // 9.26100
console.log(myPow(2.0, -2)); // 0.25000
