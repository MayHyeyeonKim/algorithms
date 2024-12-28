class Solution:
    def permute(self, nums):
        ret = []
        tmp = []

        def backtrack(nums, ret, tmp, used):
            if len(tmp) == len(nums):
                ret.append(tmp.copy())
                return
            
            for num in nums:
                if num not in used:
                    tmp.append(num)
                    used.add(num)
                    backtrack(nums, ret, tmp, used)
                    tmp.pop()
                    used.remove(num)

        backtrack(nums, ret, tmp, set())
        return ret

sol = Solution()
result = sol.permute(nums=[1,2,3])
print(result)

# from itertools import permutations
# class Solution:
#     def permute(self, nums):
#         return list(permutations(nums))