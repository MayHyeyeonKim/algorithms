#큐
#3000밀리초(3초)이내의 요청된 모든 호출 수 반환하기
#요청 들어올 때마다 해당 요청을 큐에 추가, 최근 3초 이내의 요청만 유지하고, 3초 이상 요청은 제거, 남아있는 요청 수 반환

from collections import deque

class RecentCounter:
    def __init__(self):
        self.queue = deque()

    def ping(self, t):
        self.queue.append(t) #일단 t값을 큐에 추가해야겠지
        while self.queue[0] < t - 3000: #그리고 큐의 첫 번째 요소가 t-3000보다 작아질 때 
            self.queue.popleft() #첫번째 요소 팝한다.
        return len(self.queue) #남은 애들 갯수 반환