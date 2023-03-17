import heapq as hq
import sys

# 튜플 넣어서 풀기
input = sys.stdin.readline()
pq = []
for _ in range(int(input())):
    x = int(input())
    if x:
        hq.heappush(pq, (abs(x),x))
    else:
        print(hq.heappop(pq)[1] id pq else 0)

