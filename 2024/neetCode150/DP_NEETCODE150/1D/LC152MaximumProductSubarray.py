class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        mn = nums[0]
        mx = nums[0]

        ans = nums[0]
        for n in nums[1:]:
            mn, mx = min( n, n * mn, n * mx ), max( n, n * mn, n * mx )
            ans = max(mx,ans)

        return ans