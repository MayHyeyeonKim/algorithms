# 2519. Count the Number of K-Big Indices
import heapq


def kBigIndices(nums, k):
    prefix = [False] * len(nums)
    pq = []
    for i, x in enumerate(nums):
        if len(pq) == k and -pq[0] < x:
            prefix[i] = True
        heapq.heappush(pq, -x)
        if len(pq) > k:
            heapq.heappop(pq)
    ans = 0
    pq = []
    for i, x in reversed(list(enumerate(nums))):
        if len(pq) == k and -pq[0] < x and prefix[i]:
            ans += 1
        heapq.heappush(pq, -x)
        if len(pq) > k:
            heapq.heappop(pq)
    return ans

nums = [2,3,6,5,2,3]
k = 2

result = kBigIndices(nums,k)
print(result)