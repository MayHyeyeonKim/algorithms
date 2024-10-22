# LC2638CounttheNumberofK-FreeSubsets.py


# Joe
# [130, 132, 123, 125, 127]

from collections import defaultdict
from functools import lru_cache


class Solution:
    def countTheNumOfKFreeSubsets(self, nums: List[int], k: int) -> int:
        @lru_cache
        def fibo(n):
            if n == 0:
                return 1
            if n == 1:
                return 2
            return fibo(n - 1) + fibo(n - 2)

        nums.sort()
        group = defaultdict(int)

        for n in nums:
            group[n] += 1
            key = n - k
            if key in group:
                group[n] += group[key]
                del group[key]
        print(group)
        res = 1
        for _, v in group.items():
            res *= fibo(v)
        return res


# 두 숫자의 차이가 K와 같으면 안 된다
# 먼저 숫자들을 작은 순서대로 정리하고 -> sort
# 숫자들을 묶고 (group 딕셔너리)
# 피보나치 숫자로 계산하고 (fibo() 함수) -> 이 fibo 함수는 K-free 조건을 만족하는 부분 집합의 개수를 계산하기 위해 필요
