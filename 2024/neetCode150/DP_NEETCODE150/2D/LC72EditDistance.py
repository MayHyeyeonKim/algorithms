class Solution:
    def minDistance(self, word1, word2):
        m, n = len(word1), len(word2)
        dp = [[0 for _ in range(n + 1)] for _ in range(m + 1)]

        # Fill the base cases
        for i in range(m + 1):
            dp[i][0] = i  # If word2 is empty, we need to delete all characters of word1
        for j in range(n + 1):
            dp[0][j] = j  # If word1 is empty, we need to insert all characters of word2

        # Fill the dp array
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if word1[i - 1] == word2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1]
                else:
                    dp[i][j] = 1 + min(dp[i - 1][j],    # Delete
                                       dp[i][j - 1],    # Insert
                                       dp[i - 1][j - 1]) # Replace

        return dp[m][n]