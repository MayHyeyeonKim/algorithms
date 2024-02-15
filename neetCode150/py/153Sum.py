class Solution:
    def threeSum(self, nums):
        nums.sort()
        result = []
        for i in range(len(nums) - 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            low, high = i + 1, len(nums) - 1
            while low < high:
                sum = nums[i] + nums[low] + nums[high]
                if sum < 0:
                    low += 1
                elif sum > 0:
                    high -= 1
                else:
                    result.append([nums[i], nums[low], nums[high]])
                    while low < high and nums[low] == nums[low + 1]:
                        low += 1
                    while low < high and nums[high] == nums[high - 1]:
                        high -= 1
                    low += 1
                    high -= 1
        return result

nums = [-1,0,1,2,-1,-4]
solution = Solution()
result = solution.threeSum(nums)
print(result)