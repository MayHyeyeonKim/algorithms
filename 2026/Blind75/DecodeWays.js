// 91. Decode Ways

/**

문자열 s를 왼쪽부터 보면서
    한 자리로 해석 가능한가? (1~9)
    두 자리로 해석 가능한가? (10~26)
이 두 가지를 합쳐서 경우의 수를 누적하면 됨.

dp써서
한 자리(1~9)면 dp[i-1] 더하고
두 자리(10~26)면 dp[i-2] 더하면 끝
0 처리만 조심

 */

function numDecodings(s) {
  if (s.length === 0) return 0;

  let prev2 = 1;
  let prev1 = s[0] === "0" ? 0 : 1;

  for (let i = 2; i <= s.length; i++) {
    let cur = 0;

    if (s[i - 1] !== "0") {
      cur += prev1;
    }

    const two = Number(s.slice(i - 2, i));
    if (two >= 10 && two <= 26) {
      cur += prev2;
    }

    prev2 = prev1;
    prev1 = cur;
  }
  return prev1;
}
