# MS
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        dp = [0] * len(nums)
        res = 0
        for i in range(len(nums)):
            max_ = 0
            for j in range(i):
                if nums[i] > nums[j] and dp[j] > max_:
                    max_ = dp[j]

            dp[i] = max_ + 1
            if res < dp[i]:
                res = dp[i]
        return res

# DW
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        res = 1
        l = len(nums)
        dp = [1] * l

        for i in range(l-2, -1, -1):
            for j in range(i+1, l):
                if nums[i] < nums[j]:
                    dp[i] = max(dp[i], dp[j] + 1)
            res = max(res, dp[i])

        return res

# YS
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        dp = [1] * len(nums)

        for i in range(len(nums)):
            for j in range(0,i):
                if nums[j] < nums[i]:
                    dp[i] = max(dp[j]+1, dp[i])

        return max(dp)