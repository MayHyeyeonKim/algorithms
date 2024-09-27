# LC2534TimeTakentoCrosstheDoor.py

# DW
from collections import defaultdict
import heapq

class Solution:
    def timeTaken(self, arrival, state):
        n = len(arrival)
        answer = [-1 for i in range(n)]

        dic = defaultdict(list)
        for p, t in enumerate(arrival):
            dic[t].append(p)

        status = -1
        enter_heap = []
        exit_heap = []
        cnt = i = 0
        while cnt < n:
            prev_cnt = cnt
            if i in dic:
                for p in dic[i]:
                    if state[p] == 0:
                        heapq.heappush(enter_heap, p)
                    else:
                        heapq.heappush(exit_heap, p)

            if status == -1:
                if exit_heap:
                    p = heapq.heappop(exit_heap)
                    answer[p] = i
                    status = 1
                    cnt += 1
                elif enter_heap:
                    p = heapq.heappop(enter_heap)
                    answer[p] = i
                    status = 0
                    cnt += 1
            elif status == 0:
                if enter_heap:
                    p = heapq.heappop(enter_heap)
                    answer[p] = i
                    status = 0
                    cnt += 1
                elif exit_heap:
                    p = heapq.heappop(exit_heap)
                    answer[p] = i
                    status = 1
                    cnt += 1
            else:
                if exit_heap:
                    p = heapq.heappop(exit_heap)
                    answer[p] = i
                    status = 1
                    cnt += 1
                elif enter_heap:
                    p = heapq.heappop(enter_heap)
                    answer[p] = i
                    status = 0
                    cnt += 1
            if prev_cnt == cnt:
                status = -1
            i += 1

        return answer


# Joe
class Solution:
    def timeTaken(self, arrival, state):
        # 0 -> enter, 1 -> exit
        enterq, exitq = deque(), deque()
        previous_status = 1
        i = 0
        cur_time = 0
        ans = [0]*len(arrival)
        while i < len(arrival) or enterq or exitq:
            while i < len(arrival) and arrival[i] <= cur_time:
                if state[i] == 0:
                    enterq.append(i)
                else:
                    exitq.append(i)
                i += 1
            if previous_status == 1: # exit
                if exitq:
                    ans[exitq.popleft()] = cur_time
                elif enterq:
                    ans[enterq.popleft()] = cur_time
                    previous_status = 0
            else: # enter
                if enterq:
                    ans[enterq.popleft()] = cur_time
                elif exitq:
                    ans[exitq.popleft()] = cur_time
                    previous_status = 1
                else:
                    previous_status = 1
            cur_time += 1
        return ans