// 171. Excel Sheet Column Number

/**
 *
 * .charCodeAt() 문자열의 특정 위치에 있는 문자의 유니코드 값을 반환함.
 * 'A'의 유니코드 값은 65임. 따라서 'A'.charCodeAt(0) - 64 = 1이 됨.
 *
 */

function titleToNumber(columnTitle) {
  let result = 0;

  for (let ch of columnTitle) {
    result = result * 26 + (ch.charCodeAt(0) - 64);
  }
  return result;
}

console.log(titleToNumber("A")); // 1
console.log(titleToNumber("AB")); // 28
console.log(titleToNumber("ZY")); // 701
console.log(titleToNumber("FXSHRXW")); // 2147483647
