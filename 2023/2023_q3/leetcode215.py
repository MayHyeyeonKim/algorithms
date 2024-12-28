# return sorted(nums)[-k]

import heapq


def findKthLargest(nums, k):
    return heapq.nlargest(k, nums)[-1]


# nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
# largest_three = heapq.nlargest(3, nums)
# print(largest_three)  # 출력: [9, 6, 5]

# smallest_in_largest_three = largest_three[-1]
# print(smallest_in_largest_three)  # 출력: 5
