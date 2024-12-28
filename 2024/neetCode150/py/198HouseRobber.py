class Solution:
    def rob(self, nums):
        if len(nums) <= 2:
            return max(nums)

        first_case, second_case = nums[0], max(nums[0],nums[1])
        for i in range(2, len(nums)):
            cur_max = max(second_case, first_case + nums[i])
            first_case = second_case
            second_case = cur_max
        return second_case

#TC : O(n)
#SC : O(1)


# class Solution:
#     def rob(self, nums):
#         # dp[0] = nums[0]
#         # dp[1] = max(nums[0], nums[1])
#         # dp[n] = max((nums[n] + dp[n-2]), dp[n-1])]
#         if len(nums) <= 2:
#             return max(nums)

#         dp = [0] * len(nums)
#         dp[0], dp[1] = nums[0], max(nums[1], nums[0])
#         n = len(nums)
#         for i in range(2, n):
#             dp[i] = max((nums[i] + dp[i-2]), dp[i-1])

#         return dp[n-1]

#TC : O(n)
#SC : O(n)

sol = Solution()
print(sol.rob([2, 7, 9, 3, 1]))