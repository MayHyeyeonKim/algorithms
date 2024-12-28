class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        for i, s in enumerate(stones):
            stones[i] = -s
        heapify(stones)
        
        while len(stones) > 1:
            x = -heappop(stones)
            y = -heappop(stones)
            gameresult = x - y 
            if gameresult != 0:
                heappush(stones, -gameresult)
        
        if len(stones) == 1:
            return -stones[0]
        else:
            return 0   