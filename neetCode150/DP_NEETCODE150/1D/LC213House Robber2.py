class Solution:
    def rob(self, nums):
        def dp(start, end):
            # if end - start <= 0:
            #     return nums[start]
            p1, p2 = 0, 0
            for i in range(start, end + 1):
                curr = max(p2, p1 + nums[i])
                p1, p2 = p2, curr
            return p2

        if len(nums) == 1:
            return nums[0]
        return max(dp(0, len(nums) - 2), dp(1, len(nums) - 1))

sol = Solution()
print(sol.rob([2, 3, 2]))