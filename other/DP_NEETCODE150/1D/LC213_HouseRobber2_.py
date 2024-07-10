#LC213_HouseRobber2.py
class Solution:
    def rob(self, nums):
        if len(nums) == 1:
            return nums[0]
        return max(self.helper(nums[1:]), self.helper(nums[:-1]))

    def helper(self, nums):
        rob1, rob2 = 0,0
        for n in nums:
            newRob = max(n+rob1, rob2)
            rob1 = rob2
            rob2 = newRob
        return rob2

sol = Solution()
nums=[1,2,4,6]
result = sol.rob(nums)
print(result)
