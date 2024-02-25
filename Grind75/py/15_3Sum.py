class Solution:
    def threeSum(self, nums):
        """
                i
        nums = [-1, 0, 1, 2, -1, -4]
                    l.            h 
        """

        triplets = set()
        nums.sort()
        for i in range(len(nums)-2):
            l, r = i+1, len(nums)-1
            while l < r:
                if nums[i] + nums[l] + nums[r] < 0:
                    l += 1
                elif nums[i] + nums[l] + nums[r] > 0:
                    r -= 1
                else:
                    triplets.add((nums[i], nums[l], nums[r]))
                    l, r = l+1, r-1
        return list(triplets)
    
nums = [-1,0,1,2,-1,-4]
sol = Solution()
print(sol.threeSum(nums))