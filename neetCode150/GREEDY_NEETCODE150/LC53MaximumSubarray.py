class Solution:
    def maxSubArray(self, nums):


# DP배열을 사용하여 최대 부분 배열 합을 저장한 거면 DP인건가?
# T.C = O(n)
# S.C = O(n)

        dp = [0] * len(nums)
        dp[0] = nums[0]
        for i in range(1, len(nums)):
            dp[i] = max(nums[i], dp[i-1]+nums[i])
        return max(dp)

# 위의 어프로치랑 같지만 DP배열을 사용하지 않고 두 개의 변수만 사용하면 최적화된 DP이자 그리디인건가?
# T.C = O(n)
# S.C = O(1)
        max_total = nums[0]
        total = nums[0]
        for i in range(1, len(nums)):
            total = max(nums[i], total+nums[i])
            max_total = max(total, max_total)
        return max_total

sol = Solution()
print(sol.maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

"""
                #    ____________
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
dp =   [-2, 1, -2, 4,  3, 5, 6,  1, 5]
"""