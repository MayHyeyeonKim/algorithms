# 최소,최대

N = int(input())
M = list(map(int, input().split()))


max = M[0]
min = M[0]

for i in M[1:]:
    if i > max:
        max = i
    elif i < min:
        min = i

print(min, max)
