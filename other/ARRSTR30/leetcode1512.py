# class Solution:
#     def numIdenticalPairs(self, nums):
#         count = 0
#         for i in range(len(nums)):
#             for j in range(i + 1, len(nums)):
#                 if nums[i] == nums[j]:
#                     count += 1
#         return count


# nums = [1, 2, 3, 4, 1]
# sol = Solution()
# ans = sol.numIdenticalPairs(nums)
# print(ans)

from collections import Counter


class Solution:
    def numIdenticalPairs(self, nums):
        count = Counter(nums)
        res = 0
        for n, c in count.items():
            res += c * (c - 1) // 2
        return res


nums = [1, 2, 3, 4, 1]
sol = Solution()
ans = sol.numIdenticalPairs(nums)
print(ans)
