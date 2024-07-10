class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        dp = [0] * (amount + 1)
        dp[0] = 1
        for coin in coins:
            for j in range(coin, amount + 1):
               dp[j] += dp[j - coin]
        return dp[amount]

class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        dp = [0] * (amount + 1) #[1,1,2,2,3,4]
        dp[0] = 1

        for coin in coins: (1,2,5)
            for i in range(coin, amount + 1): (2,6)
                dp[i] = dp[i] + dp[i-coin]
                dp[5] = dp[5] + dp[0]
        return dp[amount]