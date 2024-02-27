import heapq
class Solution:
    def kClosest(self, points, k):
        def dist(x,y):
            return x**2 + y**2
        
        heap=[]
        for x,y in points:
            d = dist(x,y)
            if len(heap) < k:
                heapq.heappush(heap, (-d,x,y)) # 파이썬에서 heapify할 때 튜플의 첫 번째 요소를 기준으로 minheap유지
            else:
                heapq.heappushpop(heap, (-d,x,y))
        return [(x,y) for d,x,y in heap]

points = [[3,3], [1,1], [2,2], [4,4]]
k=2
sol = Solution()
res = sol.kClosest(points,k)
print(res)