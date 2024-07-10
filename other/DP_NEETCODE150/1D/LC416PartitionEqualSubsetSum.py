# DW
class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        tot = sum(nums)
        if tot % 2 == 1:
            return False
        half = tot // 2

        set_ = set()
        set_.add(0)
        for i in range(len(nums)-1, -1, -1):
            nSet = set()
            for s in set_:
                nSet.add(nums[i] + s)
            set_ |= nSet

        return True if half in set_ else False

# YS
class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        summ = sum(nums)
        if summ % 2 == 1:
            return False

        subset_sum = summ // 2
        dp = [False] * (subset_sum+1)
        dp[0] = True

        for n in nums:
            for i in range(len(dp)-1, -1, -1):
                if dp[i] and i+n < subset_sum+1:
                    if i+n == subset_sum:
                        return True
                    dp[i+n] = True
        return False