import heapq
# 215KthLargestElementinanArray.py

# Example 1:
# Input: nums = [3,2,1,5,6,4], k = 2
# Output: 5

# Example 2:
# Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
# Output: 4

# [approach1] Sorting
# class Solution:
#     def findKthLargest(self,nums,k):
#         nums.sort()
#         return nums[-k]

# [approach2] Heap
# time: O(n)
# space: O(k)

class Solution:
    def findKthLargest(self, nums, k):
        heap = []
        for num in nums:
            if len(heap) < k:
                heapq.heappush(heap, num)
            else:
                if heap[0] < num:
                    heapq.heappop(heap) #힙의 루트 요소를 제거(민힙)
                    heapq.heappush(heap,num)
                    #heapq.heappushpop(heap, num)
        return heap[0]

nums = [3,2,1,5,6,4]
k = 2

sol = Solution()
print(sol.findKthLargest(nums,k))