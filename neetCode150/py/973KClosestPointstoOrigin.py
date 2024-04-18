import heapq
class Solution:
    def kClosest(self, points, k):
        pq=[]
        for x,y in points:
            d=(x ** 2) + (y ** 2)
            pq.append([d,x,y])
        heapq.heapify(pq)
        ans=[]
        while k > 0:
            d,x,y=heapq.heappop(pq)
            ans.append([x,y])
            k -= 1
        return ans