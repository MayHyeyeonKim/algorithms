/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  /**
    I = 1
    V = 5
    X = 10
    L = 50
    C = 100
    D = 500
    M = 1000
    규칙은 두 가지야:

    큰 숫자가 뒤에 있으면 더하기
    예: VI → 5 + 1 = 6
    작은 숫자가 큰 숫자 앞에 있으면 빼기
    예: IV → 5 - 1 = 4

    "III" → 1 + 1 + 1 = 3
    "IV" → 5 - 1 = 4
    "IX" → 10 - 1 = 9
    "LVIII" → 50 + 5 + 3 = 58
    
    1. 로마 숫자를 값으로 매핑
    2. 문자열을 순회하면서 규칙 적용
        - 작은 값이 큰 값 앞에 있는 경우 (뺼셈)
        - 그렇지 않으면 더하기
     */

  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = romanMap[s[i]];
    const next = romanMap[s[i + 1]] || 0;
    //0 맨 마지막에 오는 숫자는 무조건 덧셈이 되기 때문에 0을 넣어 undefined방지

    if (current < next) {
      //작은 값이 큰 값 앞에 있으면 뺴기!
      total -= current;
    } else {
      total += current;
    }
  }
  return total;
};
