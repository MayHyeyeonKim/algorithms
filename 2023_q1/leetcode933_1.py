from collections import deque

class RecentCounter:

    def __init__(self):
        self.queue = deque()

    def ping(self, t):
        q = self.queue
        self.queue.append(t)
        start = t - 3000
        while q and q[0] < start:
            q.popleft()
        return len(q)
    
test = RecentCounter()
print(test.ping(1))
print(test.ping(100))
print(test.ping(3001))
print(test.ping(3003))


#난 이거 어려웠어