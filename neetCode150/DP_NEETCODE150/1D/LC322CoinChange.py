class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [0] + [amount + 1] * amount 
        # [0,12,12,12,12,12,12,12,12,12,12, 12] 각 자리의 동전을 만드는데 필요한 동전 수
        for coin in coins: [1,2,5]
            for i in range(coin, amount + 1): #(1,12)(2,12)(5,12)
                dp[i] = min(dp[i - coin] + 1, dp[i])

        return dp[amount] if dp[amount] < amount + 1 else -1