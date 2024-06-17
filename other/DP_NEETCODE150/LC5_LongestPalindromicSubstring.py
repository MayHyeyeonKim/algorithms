#LC5_LongestPalindromicSubstring.py
class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        if n < 2:
            return s

        dp = [[False] * n for _ in range(n)]
        start, max_length = 0, 1

        # 모든 단일 문자 문자열은 회문
        for i in range(n):
            dp[i][i] = True

        # 길이가 2인 회문 확인
        for i in range(n - 1):
            if s[i] == s[i + 1]:
                dp[i][i + 1] = True
                start = i
                max_length = 2

        # 길이가 3 이상인 회문 확인
        for length in range(3, n + 1):  # length는 부분 문자열의 길이
            for i in range(n - length + 1):
                j = i + length - 1  # 부분 문자열의 끝 인덱스
                if s[i] == s[j] and dp[i + 1][j - 1]:
                    dp[i][j] = True
                    start = i
                    max_length = length

        return s[start:start + max_length]

# 예시 사용
sol = Solution()
s = "aba"
result = sol.longestPalindrome(s)
print(result)  # Output: "bab" 또는 "aba"
