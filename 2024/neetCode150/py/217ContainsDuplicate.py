from typing import List

class Solution:
    def containsDuplicate(self, nums):
        nums.sort()
        n = len(nums)
        for i in range(1, n):
            if nums[i] == nums[i - 1]:
                return True
        return False
    
solution = Solution()
nums = [1,2,3,1,4,5,6]
result = solution.containsDuplicate(nums)
print(result)