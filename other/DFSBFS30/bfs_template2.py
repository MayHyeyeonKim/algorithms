from collections import deque

dy = (0, 1, 0, -1)
dx = (1, 0, -1, 0)

chk = [[False] * 10 for _ in range(10)]
# n = int(input())
n = 5

# for c in chk:
#     print(c)


def is_valid_coord(y, x):
    return 0 <= y < n and 0 <= x < n


def bfs(start_y, start_x):
    q = deque()
    q.append((start_y, start_x))
    while len(q) > 0:
        y, x = q.popleft()
        chk[y][x] = True
        for k in range(4):
            ny = y + dy[k]
            nx = x + dx[k]
            if is_valid_coord(ny, nx) and not chk[ny][nx]:
                q.append((ny, nx))
