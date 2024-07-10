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

sol = Solution()
print(sol.rob([2, 7, 9, 3, 1]))