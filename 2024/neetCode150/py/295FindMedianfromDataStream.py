#295FindMedianfromDataStream.py

import heapq
class MedianFinder: 
    def __init__(self): #O(1), O(1)
        self.minHeap = []
        self.maxHeap = []
        
    def addNum(self, num: int) -> None: #O(logn) O(n)
        if len(self.minHeap) == len(self.maxHeap):
            heapq.heappush(self.minHeap, num)
            heapq.heappush(self.maxHeap, -heapq.heappop(self.minHeap)) 
        else:
            heapq.heappush(self.maxHeap, -num)
            heapq.heappush(self.minHeap, -heapq.heappop(self.maxHeap))    

    def findMedian(self) -> float: #O(1) O(1)
        if len(self.minHeap) == len(self.maxHeap):
            return (self.minHeap[0] -self.maxHeap[0]) / 2
        else: 
            return -self.maxHeap[0]

# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()