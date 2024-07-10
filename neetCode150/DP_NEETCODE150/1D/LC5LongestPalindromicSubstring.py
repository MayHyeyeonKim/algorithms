#Center Expansion O(n^2) O(n)
def longestPalindrome(s: str) -> str:
    def expand(l: int, r: int) -> str:
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l -= 1
            r += 1
        return s[l + 1:r]

    result = ""
    for i in range(len(s)):
        sub1 = expand(i, i)
        if len(sub1) > len(result):
            result = sub1
        sub2 = expand(i, i + 1)
        if len(sub2) > len(result):
            result = sub2

    return result

#dp - O(n^2) O(n^2)
class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        if n <= 1:
            return s

        dp = [[False] * n for _ in range(n)]
        start, max_length = 0, 1

        # 모든 단일 문자는 팰린드롬
        for i in range(n):
            dp[i][i] = True

        # 두 문자가 같은 경우
        for i in range(n - 1):
            if s[i] == s[i + 1]:
                dp[i][i + 1] = True
                start = i
                max_length = 2

        # 점화식 적용
        for length in range(3, n + 1):
            for i in range(n - length + 1):
                j = i + length - 1
                if dp[i + 1][j - 1] and s[i] == s[j]:
                    dp[i][j] = True
                    start = i
                    max_length = length

        return s[start:start + max_length]