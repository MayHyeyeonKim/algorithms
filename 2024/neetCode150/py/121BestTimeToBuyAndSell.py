class Solution:
    def maxProfit(self, prices):
        left, right = 0,1
        maxPrice = 0
        while right < len(prices):
            maxPrice = max(maxPrice, prices[right]-prices[left])
            if prices[left] < prices[right]:
                prices[right] = prices[left]
            left += 1
            right += 1
        return maxPrice

solution = Solution()
prices = [7,1,5,3,6,4]
# prices = [2,3,7,5,6,2,9]
print(solution.maxProfit(prices))