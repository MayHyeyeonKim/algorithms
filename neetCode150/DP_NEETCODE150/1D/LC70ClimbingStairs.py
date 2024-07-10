class Solution: #O(n) O(n)
    def climbStairs(self, n: int) -> int:
        memo = {}
        def fib(n):
            if n in memo:
                return memo[n]
            if n == 0 or n == 1:
                return 1
            memo[n] = fib(n-1) + fib(n-2)
            return memo[n]
        return fib(n)

# DP와 Divide and Conquer 어떻게 다른가요?
# DP에는 탑다운 바텀업방식이 있다는데, 탑다운은 메모이제이션을 사용하고 바텀업은 DP테이블을 사용한다
# 탑다운: 재귀 메모이제이션, 바텀업: 반복문, 배열

# DP
#TC : O(n)
#SC : O(1)
class Solution:
    def climbStairs(self, n: int) -> int:
        p1, p2 = 1, 2
        if n==1:
            return p1
        if n==2:
            return p2
        for i in range(3,n+1):
            res = p1 + p2
            p1, p2 = p2, res
        return res

#비네
#TC : O(1)
#SC : O(1)
class Solution:
    def climbStairs(self, n: int) -> int:
        a = (1 + math.sqrt(5)) / 2
        b = (1 - math.sqrt(5)) / 2
        return round((a**(n + 1) - b**(n + 1)) / math.sqrt(5))