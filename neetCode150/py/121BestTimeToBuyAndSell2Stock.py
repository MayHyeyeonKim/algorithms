class Solution:
    def maxProfit(self, prices):
        n, maxProfit = len(prices), 0
        i = 0
        for j in range(1, n):
            if prices[j] < prices[i]: #현재 가격이 최소값보다 작으면 최소가격을 현재값으로 업데이트
                i = j
            else: #그렇지 않으면(현재 가격이 최소 가격보다 크거나 같으면)
                maxProfit = max(maxProfit, prices[j] - prices[i])
        return maxProfit

s = Solution()
prices = [7,1,5,3,6,4]
print(s.maxProfit(prices))