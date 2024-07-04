class Solution:
    def change(self, amount: int, coins):
        dp = [0] * (amount + 1) [1,1,2,2,3,4] #amount를 만들 수 있는 경우의 수
        dp[0] = 1
        
        for coin in coins:
            for i in range(coin, amount + 1):
                dp[i] = dp[i] + dp[i-coin] 
                dp[5] = dp[5] + dp[0]
        return dp[amount]