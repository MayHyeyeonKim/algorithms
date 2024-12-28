# Dynamic Programming


def minCostClimbingStairs(cost):
    n = len(cost)
    dp = [0] * n
    dp[0] = cost[0]
    dp[1] = cost[1]

    for i in range(2, n):
        dp[i] = cost[i] + min(dp[i - 1], dp[i - 2])
    return min(dp[-2:])


costEX = [2, 5, 8, 10, 4]
print(minCostClimbingStairs(costEX))
