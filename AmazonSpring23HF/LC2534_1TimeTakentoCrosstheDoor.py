# 2534. Time Taken to Cross the Door

# 문을 어느 방향으로 열지 결정하는 기준: 

from collections import deque


class Solution:
    def timeTaken(self, arrival, state):
        
        enter_q = deque([]) # 들어가려는 사람의 큐
        exit_q = deque([]) # 나가려는 사람의 큐
        ans = [-1]*len(arrival) 
        direction = 1  # 0 - enter; 1 - exit
        curr_time = 0 #현재시간

        for i in range(len(arrival)): # 모든 사람 한 명씩 차례로 확인

            # reset the direction if door was not used in previous second.
            if arrival[i] - curr_time > 0:
                direction = 1
            curr_time = arrival[i]

            # append index to the appropriate queue
            if state[i] == 1:
                exit_q.append(i)
            else:
                enter_q.append(i)

            # keep popping indices out of queues if we are at the end of arrival list or if the curr_time < next arrival time
            while i+1 == len(arrival) or curr_time < arrival[i+1]:
                if direction == 1 and exit_q:
                    ans[exit_q.popleft()] = curr_time
                elif enter_q:
                    ans[enter_q.popleft()] = curr_time
                    direction = 0
                elif exit_q:
                    ans[exit_q.popleft()] = curr_time
                    direction = 1
                else: 
                    break
                
                curr_time += 1

        return ans