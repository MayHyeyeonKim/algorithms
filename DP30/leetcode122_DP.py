class Solution:
    def maxProfit(prices):
        n = len(prices)
        if n < 2:
            return 0

        buyDp = [0] * n  # [-7][0][0][0][0][0]
        sellDp = [0] * n  # [0][0][0][0][0][0]

        buyDp[0] = -prices[0]  # 첫날은 prices[0]만큼 사서 돈을 지출했으니 마이너스가 났겠지
        for i in range(1, n):
            buyDp[i] = max(sellDp[i - 1] - prices[i], buyDp[i - 1])
            sellDp[i] = max(buyDp[i - 1] + prices[i], sellDp[i - 1])
        return sellDp[n - 1]


sol = Solution
prices = [7, 1, 5, 3, 6, 4]
ans = sol.maxProfit(prices)
print(ans)
