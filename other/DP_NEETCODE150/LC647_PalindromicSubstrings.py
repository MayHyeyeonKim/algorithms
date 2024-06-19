# LC647_PalindromicSubstrings.py
# #dp - O(n^2) O(n^2)

class Solution:
    def countSubstrings(self, s):
        n = len(s)
        dp = [[False] * n for _ in range(n)]
        count = 0
        
        # 모든 단일 문자는 팰린드롬
        for i in range(n):
            dp[i][i] = True
            count += 1
        
        # 두 문자로 된 팰린드롬
        for i in range(n - 1):
            if s[i] == s[i + 1]:
                dp[i][i + 1] = True
                count += 1
        
        # 세 문자 이상의 팰린드롬
        for length in range(3, n + 1):
            for i in range(n - length + 1):
                j = i + length - 1
                if s[i] == s[j] and dp[i + 1][j - 1]:
                    dp[i][j] = True
                    count += 1
        
        return count
    
sol = Solution()
s = "aaa"
result = sol.countSubstrings(s)
print(result)  # Output: "bab" 또는 "aba"