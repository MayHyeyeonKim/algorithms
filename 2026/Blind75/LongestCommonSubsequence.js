// 1143. Longest Common Subsequence
// 순서는 지키되(연속일 필요는 없음),dp하면 되겠는데?

function longestCommonSubsequence(text1, text2) {
  const n = text1.length;
  const m = text2.length;

  // dp테이블을 만드는데 text1의 길이+1만큼의 row를 만들고 그 안의 인덱스 각각을 text2의 길이 +1한 것만큼 넣는데 0으로 채운걸로 넣어라. 이건 함수로 써서.
  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[n][m];
}

console.log(longestCommonSubsequence("abcde", "ace")); // 3
console.log(longestCommonSubsequence("abc", "abc")); // 3
console.log(longestCommonSubsequence("abc", "def")); // 0

/**
      ""  a  c  e
""     0  0  0  0
a      0
b      0
c      0
d      0
e      0


      ""  a  c  e
""     0  0  0  0
a      0  1  1  1
b      0  1  1  1
c      0  1  2  2
d      0  1  2  2
e      0  1  2  3
 */
