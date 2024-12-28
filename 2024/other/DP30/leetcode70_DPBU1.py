# DP - Bottom-up


class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 0 or n == 1:
            return 1

        dp = [0] * (n + 1)
        dp[0] = dp[1] = 1
        for i in range(2, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2]

        return dp[n]


# 피보나치 수열 계산 (Fibonacci Sequence): 바텀-업 방식으로 피보나치 수열을 계산할 때, 초기값으로 fib[0] = 1, fib[1] = 1을 설정하고 반복문을 사용하여 fib[i] = fib[i-1] + fib[i-2]를 계산합니다.

# 계단 오르기 문제 (Climbing Stairs): 바텀-업 방식으로 계단 오르기 문제를 풀 때, 초기값으로 dp[1] = 1, dp[2] = 2를 설정하고 반복문을 사용하여 dp[i] = dp[i-1] + dp[i-2]를 계산합니다. 이 문제는 각 계단을 오를 때 1칸 또는 2칸씩 오를 수 있는 경우를 계산하는 문제입니다.

# 트리 구조 문제 (Tree Structure): 바텀-업 방식은 트리 구조 문제에서도 사용될 수 있습니다. 루트 노드에서 시작하여 하위 노드로 이동하며 각 노드에서 필요한 계산을 수행하고, 그 결과를 이용하여 상위 노드의 계산을 수행합니다.
