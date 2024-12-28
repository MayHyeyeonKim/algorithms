# 1046. Last Stone Weight

import heapq
class Solution:
    def lastStoneWeight(self, stones):
        stones = [-stone for stone in stones]
        heapq.heapify(stones)
        # print(stones) [-8, -7, -4, -1, -2, -1]
        # print(heapq.heappop(stones)) -8이 나옴
        while len(stones) > 1:
            heapq.heappush(stones, -abs(heapq.heappop(stones)-heapq.heappop(stones)))
        return -stones[0]

# 시간 복잡도: 
# - 주어진 돌의 개수를 n이라고 할 때, 초기 힙 생성 시간 복잡도는 O(n)
# - 이후 while 루프는 최대 n-1번 반복하며, 각 반복에서 heappush()와 heappop() 함수를 호출하므로 시간 복잡도는 O(logn) 
# - 따라서 총 시간 복잡도는 O(nlogn)

# 공간 복잡도: 
# - 입력으로 주어진 돌의 무게를 저장하기 위한 배열 stones와 힙을 유지하기 위한 공간을 사용하므로 O(n)

stones = [2,7,4,10]
sol = Solution()
result = sol.lastStoneWeight(stones)
print(result)