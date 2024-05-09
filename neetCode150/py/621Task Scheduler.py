# 621Task Scheduler.py
# 26char
# import heapq
# from collections import deque
# from typing import Counter

# class Solution: #O(nlog26)
#     def leastInterval(self, tasks, n):
#         count = Counter(tasks)
#         maxHeap = [ -cnt for cnt in count.values()]
#         heapq.heapify(maxHeap)

#         time = 0
#         q = deque()
#         while maxHeap or q:
#             time += 1
#             if maxHeap:
#                 cnt = 1 + heapq.heappop(maxHeap)
#                 if cnt:
#                     q.append([cnt, time+n])
#             if q and q[0][1] == time:
#                 heapq.heappush(maxHeap, q.popleft()[0])
#         return time

class Solution: # O(T) 시간이 걸림. 여기서 T는 입력으로 주어진 태스크의 총 수
    def leastInterval(self, tasks, n):
        arr = [0] * 26
        for task in tasks:
            arr[ord(task) - ord('A')] += 1 #아스키로 A가 65니까 65 - 65에 1씩 더함 A가 3개니까 +3 짐

        max_ = max(arr) #[3, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        cnt = arr.count(max_) # 빈번하게 등장한 개수가 

        return max((max_ - 1) * (n + 1) + cnt, len(tasks))


sol = Solution()
result = sol.leastInterval(tasks=["A","A","A","A"], n=1)
print(result)