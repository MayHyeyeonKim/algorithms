# 주어진 h 시간 꽉 채워서 바나나를 먹고 싶어 하는 코코, 코코는 천천히 먹기를 원한다.
# 한 시간에 몇 개를 먹어야 h 시간 동안 다 먹을 수 있을지 구하는 문제이다. 여기에 규칙이 두 가지 있다.
 # 코코는 천천히 먹는 걸 좋아하니까 8시간 동안 한 시간에 최소로 먹을 수 있는 바나나의 개수를 구해야 한다.
 # 한 송이의 바나나를 한 시간 안에 다 먹고 시간이 남아도 기다렸다가 다음 한 시간에 다음 바나나먹기 시작해야 한다. 한 시간 안에 한 송이의 바나나를 다 못 먹었으면 다음 한 시간에 이어서 먹는다.

import math
class Solution:
    def koko(self, piles, h):
        l, r = 1, max(piles)
        result = r
        while l <= r:
            k = l +(r-l)//2
            hours = 0
            for p in piles:
                hours += math.ceil(p/k) #올림
            if hours <= h:
                result = min(result, k)
                r = k - 1
            else:
                l = k + 1
        return result
def main():
    piles = [3,6,7,11]
    h = 8
    sol = Solution()
    res = sol.koko(piles, h)
    print(res)

if __name__ == "__main__":
    main()

# TC: O(nlogm)  -  O((piles의배열의길이) log (piles배열에서 가장 많은 바나나를 가진 송이의 개수))
# SC: O(1)  -  주어진 입력 이외에 추가적인 저장 공간이 필요하지 않으므로