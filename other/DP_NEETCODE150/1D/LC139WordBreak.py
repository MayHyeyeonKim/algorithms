class Solution:
    def wordBreak(self, s, wordDict):
        dp = [False] * (len(s) + 1)
        dp[len(s)] = True

        for i in range(len(s)-1, -1, -1):
            for w in wordDict:
                if i + len(w) <= len(s) and s[i:i+len(w)] == w:
                    dp[i] = dp[i + len(w)]
                if dp[i] == True:
                    break

        return dp[0]

sol = Solution()
s = "leetcode"
wordDict = ["leet","code"]
print(sol.wordBreak(s,wordDict))