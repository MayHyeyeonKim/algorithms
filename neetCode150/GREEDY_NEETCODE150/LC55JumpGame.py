def canJumpDP(nums):
    n = len(nums)
    dp = [False] * n
    dp[0] = True
    
    for i in range(1, n):
        for j in range(i):
            if dp[j] and j + nums[j] >= i:
                dp[i] = True
                break
    return dp[-1]

# print(canJumpDP([2,3,1,1,4]))
print(canJumpDP([3, 2, 1, 0, 4])) 

#Greedy
from typing import List

class Solution:
    def canJump(self, nums: List[int]) -> bool:
        maxReach = 0
        for i, num in enumerate(nums):
            if i > maxReach:
                return False
            maxReach = max(maxReach, i + num)
        return True