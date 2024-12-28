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
                    heapq.heappop(heap) #민힙으로 루트를 제거, 즉 제일 작은 값인 인덱스0번에 위치한 요소를 제거
                    print(f"heappop으로 루트에 있는 요소 제거하면 heap에 {heap}가 남음")
                    heapq.heappush(heap,num)
                    print(f"heapush으로 {num}을 push하면 heap에 {heap}가 있음")
                    # heapq.heappushpop(heap, num) #두 번의 작업을 한 번의 작업으로 처리하여 더 빠르게 실행될 가능성이 있으니 효율적
                    # print(heap)
        return heap[0]

nums = [3,2,1,5,6,4]
k = 2

sol = Solution()
print(sol.findKthLargest(nums,k))

#  heapq.heappush, heapq.heappop, heapq.heappushpop 모두 내부적으로 heapify 연산이 수행
#  보통 힙(heap)에서 루트 노드는 인덱스 0번