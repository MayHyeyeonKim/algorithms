from collections import deque

adj = [[0] * 13 for _ in range(13)]
adj[0][1] = adj[0][2] = 1
adj[1][3] = adj[1][4] = 1


def bfs():
    dp = deque()
    dp.append(0)
    while dp:
        now = dp.popleft()
        for nxt in range(13):
            if adj[now][nxt]:
                dp.append(nxt)


bfs()
