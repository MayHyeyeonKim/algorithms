#Heap / Priority Queue

import heapq
# 모듈: 파이썬에서 기능적으로 관련된 일련의 함수, 클래스, 변수들을 모아 놓은 파일
# heapq.heapify() <- 모듈에 정의된 함수

class KthLargest:
    def __init__(self, k, nums):
        self.minHeap, self.k =nums, k
        heapq.heapify(self.minHeap)
        while len(self.minHeap) > k:
            heapq.heappop(self.minHeap)
    
    def add(self, val):
        heapq.heappush(self.minHeap, val)
        if len(self.minHeap) > self.k:
            heapq.heappop(self.minHeap)
        return self.minHeap[0]
    
k = 3
nums = [4, 5, 8, 2]
kthLargest = KthLargest(k, nums)

print(kthLargest.add(3))  # returns 4 - 8 5 4
print(kthLargest.add(5))  # returns 5 - 8 5 5
print(kthLargest.add(10)) # returns 5 - 10 8 5
print(kthLargest.add(9))  # returns 8 - 10 9 8
print(kthLargest.add(4))  # returns 8 - 10 9 8