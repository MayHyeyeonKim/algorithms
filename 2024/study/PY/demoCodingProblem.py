class Solution:
    def twoSum(self, nums, target):
        if len(nums) < 2:
            return []

        for i in range(len(nums)): 
            for j in range(i+1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]
        return []

nums = [3,2,4,50]
target = 54
solution = Solution()
res = solution.twoSum(nums, target)
print(res)



# time complexity : O(n^2)
# space complexity  : O(1)

# line9
# print(f"i = {i}, j = {j}")
# print(f"nums[i] = {nums[i]}")
# print(f"nums[j] = {nums[j]}")
# print(" ")