# nums의 요소에 + 또는 - 기호를 붙여서 target을 만들 수 있는 방법의 수 반환
# findTSW(Target Sum Ways)

# class Solution:
#     def findTargetSumWays(self, nums, target):
#         count = 0
#         dp = {}
#         n = len(nums)
        
#         def findTSW(i, sum):
#             if (i, sum) in dp:
#                 return dp[(i, sum)]
#             if (i == n):
#                 if (sum == target):
#                     return 1
#                 return 0
#             addElem = findTSW(i + 1, sum + nums[i])
#             remElem = findTSW(i + 1, sum - nums[i])
#             dp[(i, sum)] = addElem + remElem
#             return addElem + remElem
        
#         return findTSW(0, 0)

import collections

class Solution:
    def findTargetSumWays(self, nums, target):
        can = collections.defaultdict(int)
        can[0] = 1

        # can[0] = 1

        # can[-1] = 1
        # can[1] = 1
        # can.keys() = -1, 1

        # -1 -> -2, 0
        # +1 -> 0, 2
        # can[-2] = 1
        # can[0] = 2
        # can[2] = 1
        # can.keys() = -2, 0, 2

        # -1 -> -3, -1, 1
        # +1 -> -1, 1, 3
        # can[-3] = can[-2] = 1
        # can[-1] = 2 + 1 = 3
        # can[1] = can[2] + can[0] = 1 + 2 = 3
        # can[3] = can[2] = 1
        # can.keys() = -3, -1, 1, 3

        # -1 -> -4, -2, 0, 2
        # +1 -> -2, 0, 2, 4
        # can[-4] = can[-3] = 1
        # can[-2] = can[-1] + can[-3] = 3 + 1 = 4
        # can[0] = can[1] + can[-1] = 3 + 3 = 6
        # can[2] = can[3] + can[1] = 1 + 3 = 4
        # can[4] = can[3] = 1
        # can.keys() = -4,-2,0,2,4

        # -1 -> -5,-3,-1,1,3
        # +1 -> -3,-1,1,3,5
        # can[3] = can[4] + can[2] = 1 + 4 = 5
        for n in nums:
            new_can = collections.defaultdict(int)
            for p in can.keys():
                new_can[p-n] += can[p]
                new_can[p+n] += can[p]
            can = new_can
            print(can)

        return can[target]