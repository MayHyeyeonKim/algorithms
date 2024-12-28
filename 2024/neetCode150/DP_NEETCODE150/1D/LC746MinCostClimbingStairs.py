# TC = O(n)
# SC = O(n)
class Solution:
    def minCostClimbingStairs(self, cost):
        n = len(cost)
        memo={}
        def dp(n):
            if n == 0 or n==1:
                return 0
            if n not in memo:
                memo[n] = min(dp(n-1)+cost[n-1], dp(n-2)+cost[n-2])
            return memo[n]
        return dp(n)

sol = Solution()
print(sol.minCostClimbingStairs(cost=[10,15,20]))

# dp(3)이 처음 호출됩니다.
# dp(3)은 dp(2) + cost[2]와 dp(1) + cost[1] 중 최소값을 계산합니다.
# dp(2)이 호출됩니다.
# dp(2)은 dp(1) + cost[1]와 dp(0) + cost[0] 중 최소값을 계산합니다.
# dp(1)과 dp(0)은 기본값 0을 반환합니다.
# dp(2)는 min(15, 10)이 되어 memo[2] = 10이 됩니다.
# dp(3)는 min(30, 15)이 되어 memo[3] = 15이 됩니다.


#TC : O(n)
#SC : O(1)
class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        p1 = cost[0]
        p2 = cost[1]

        for i in range(2, len(cost)):
            curr = min(p1, p2) + cost[i]
            p1 = p2
            p2 = curr

        return min(p1, p2)