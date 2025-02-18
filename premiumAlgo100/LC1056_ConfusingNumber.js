// LC1056_ConfusingNumber.js

/**
689 → 뒤집으면 986 (원래 숫자와 다름) → Confusing Number ✅
818 → 뒤집으면 818 (원래 숫자와 같음) → Not Confusing ❌
123 → 뒤집을 수 없는 숫자 포함 (2, 3) → Not Confusing ❌

어프로치
1. 숫자를 문자열로 변환해서 한자리씩 처리
2. 숫자를 뒤집을 수 있는지 확인하기 위해 뒤집을 수 없는 숫자(2,3,4,5,7)가 포함되면 바로 False
3. 숫자를 180도 회전할 수 있는 매핑 거꾸로 변환
4. 원래 숫자와 뒤집은 숫자가 다른 경우만 true 반환
 */

// var confusingNumber = function (n) {};
function confusingNumber(n) {
  const map = {
    0: "0",
    1: "1",
    6: "9",
    8: "8",
    9: "6",
  };

  let str = n.toString();
  let rotated = "";

  for (i = str.length - 1; i >= 0; i--) {
    if (!(str[i] in map)) return false;
    rotated += map[str[i]];
  }
  return str != rotated;
}

n = 89;
res = confusingNumber(n);
console.log(res);
