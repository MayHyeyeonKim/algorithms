from collections import deque

N = int(input())
# dq = deque(range(1, N+1))

# while len(dq) > 1:
#     dq.popleft()
#     dq.append(dq.popleft())
#     # print(dq)

# print(dq.popleft())

# 배열로 풀기
arr = []
for i in range(1, N+1):
    arr.append(i)
print(arr)
while len(arr) > 1:
    arr.pop(0)
    arr.append(arr.pop(0))
    print(arr)

print(arr.pop())