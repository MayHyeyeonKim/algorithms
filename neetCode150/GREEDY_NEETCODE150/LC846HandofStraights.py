#May
from collections import Counter
class Solution:
    def isNStraightHand(self, hand, groupSize):
        # 카드의 총 개수 len(hand)가 groupSize의 배수가 아닌 경우, 그룹을 만들 수 없으므로 False를 반환
        if len(hand) % groupSize != 0:
            return False
        
        # 카드 덱 hand를 오름차순으로 정렬
        hand.sort()
        # Counter({2: 2, 3: 2, 1: 1, 4: 1, 6: 1, 7: 1, 8: 1})
        count = Counter(hand) 

        for card in hand:
            if count[card] > 0:
                for i in range(groupSize):
                    if count[card + i] > 0:
                        count[card + i] -= 1
                    else:
                        return False
        return True

# True가 나오는 경우
hand = [1,2,3,6,2,3,4,7,8]
groupSize = 3

# False가 나오는 경우
hand = [1,2,3,6,2,3,4,4,7]
groupSize = 3

sol = Solution()
result = sol.isNStraightHand(hand, groupSize)
print(result)

# 그리디: 현재 상황에서 가장 좋아 보이는 선택을 하는 알고리즘
# 이게 왜 그리디일까?    
# 매 단계에서 가장 작은 숫자부터 그룹을 만드는 최적의 선택을 하기 때문입니다. 이는 다음 단계로 넘어갔을 때의 최적의 결과를 보장.