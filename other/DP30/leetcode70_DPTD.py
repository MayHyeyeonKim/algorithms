class Solution:
    def climbStairs(self, n):
        # 메모이제이션을 위한 딕셔너리 초기화
        memo = {}

        # 재귀 함수를 통한 피보나치 수열 계산
        def fib(n):
            if n in memo:
                return memo[n]
            if n == 0 or n == 1:
                return 1
            memo[n] = fib(n - 1) + fib(n - 2)
            return memo[n]

        return fib(n)


sol = Solution()
n = 6
ans = sol.climbStairs(n)
print(ans)


# 메모이제이션(Memoization)을 구현하려면 (Top-Down)
# 재귀 함수: 메모이제이션은 일반적으로 재귀 함수와 함께 사용. 작은 하위 문제로 분할하고 해결.
# 메모 배열 또는 딕셔너리: 중복 계산을 피하기 위해 이전에 계산한 결과를 저장할 배열 또는 딕셔너리가 필요. 이를 통해 이미 계산한 값을 다시 계산하지 않고 캐싱할 수 있음.
