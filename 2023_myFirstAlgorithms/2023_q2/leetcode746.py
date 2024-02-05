class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        n = len(cost)
        memo = {}

        def dp(n):
            if n == 0 or n == 1:
                return 0
            if n not in memo:
                memo[n] = min(dp(n - 1) + cost[n - 1], dp(n - 2) + cost[n - 2])
            return memo[n]

        return dp(n)


# 완전탐색

# cost = [10, 15, 20, 17, 1]
# def dfs(n): #O(2^n)
#     if n == 0 and n == 1:
#         return 0
#     return min(dfs(n - 1) + cost[n - 1], dfs(n - 2) + cost[n - 2])

# top down(memoization)

# cost = [10, 15, 20, 17, 1]
# memo = {}


# def dp(n):  # O(n)
#     if n == 0 and n == 1:
#         return 0
#     if n not in memo:
#         min(dp(n - 1) + cost[n - 1], dp(n - 2) + cost[n - 2])
#     return memo[n]
