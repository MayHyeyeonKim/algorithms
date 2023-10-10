class Solution:
    def maxProfit(prices):
        if not prices:
            return 0
        minPrice = prices[0]
        maxProfit = 0
        for price in prices:
            minPrice = min(minPrice, price)
            profit = price - minPrice
            maxProfit = max(maxProfit, profit)
        return maxProfit


prices1 = [7, 1, 5, 3, 6, 4]
sol = Solution
ans = sol.maxProfit(prices1)
print(ans)
