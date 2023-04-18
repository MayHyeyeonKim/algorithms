class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        
        while len(stones) > 1 :
            stones.sort()

            x = stones.pop()
            y = stones.pop()

            gameresult = x - y 
            if gameresult != 0:
                stones.append(gameresult)

        if len(stones) == 1:
            return stones[0]
        else:
            return 0