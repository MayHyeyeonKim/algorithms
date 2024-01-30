N = int(5)
cache = [-1]*91
cache[0] = 0
cache[1] = 1
cnt =0

for i in range(2, N+1):
    cache[i] = cache[i-1] + cache[i-2]
print(cache[N])
