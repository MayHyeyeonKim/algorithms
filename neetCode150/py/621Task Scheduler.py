# 621Task Scheduler.py
# 26char
import heapq
from collections import deque
from typing import Counter

class Solution:
    def leastInterval(self, tasks, n):
        count = Counter(tasks)
        maxHeap = [ -cnt for cnt in count.values()]
        heapq.heapify(maxHeap)

        time = 0
        q = deque()
        while maxHeap or q:
            time += 1
            if maxHeap:
                cnt = 1 + heapq.heappop(maxHeap)
                if cnt:
                    q.append([cnt, time+n])
            if q and q[0][1] == time:
                heapq.heappush(maxHeap, q.popleft()[0])
        return time


sol = Solution()
result = sol.leastInterval(tasks=["A","A","B","C","C","D"], n=4)
print(result)