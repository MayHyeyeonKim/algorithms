class Solution:
    def countSubstrings(self, s: str) -> int:
        if len(s) == 0:
            return 0

        n = len(s)
        dp = [[False] * n for _ in range(n)]
        count = 0

        for j in range(n):
            dp[j][j] = True
            count += 1
            for i in range(j):
                if s[i] == s[j] and (j - i == 1 or dp[i + 1][j - 1]):
                    dp[i][j] = True
                    count += 1

        return count