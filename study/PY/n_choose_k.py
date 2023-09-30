# 이항계수 binomial coefficient

import sys

sys.setrecursionlimit(10**7)

Mod = 107
cache = [[0]*10 for _ in range(11)]
N,K = map(int, input().split())
def bino(n,k):
    if cache[n][k]:
        return cache[n][k]
    if k == 0 or k == n:
        cache[n][k] = 1
    else:
        cache[n][k] = bino(n-1,k-1) + bino(n-1,k)
        cache[n][k] %= Mod
    return cache[n][k]
print(bino(N,K))
