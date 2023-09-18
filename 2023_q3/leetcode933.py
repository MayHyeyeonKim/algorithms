from collections import deque


class RecentCounter:
    def __init__(self):
        self.request = deque()

    def ping(self, t):
        while self.request and self.request[0] < t - 3000:
            self.request.popleft()
            self.request.append(t)
            return len(self.request)


# 큐에 요청들을 넣을건데, t-3000~t까지 해당하는 요청만 있어야 하니 t-3000보다 작으면 leftpop하고, 그 다음 t를 append한다. 큐에 남아있는 갯수 세알려서 return!
# T.C : O(n) / S.C : O(n)
