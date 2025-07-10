// 1751. Maximum Number of Events That Can Be Attended II

#Minsu's solution
# [[1,2,4],[3,4,3],[2,3,1]]
# K=2
class Solution:
    def maxValue(self, events: List[List[int]], k: int) -> int:
        events.sort(key=lambda x: x[0])
        n = len(events)
        dp = [[0] * (k + 1) for _ in range(n + 1)]

        if k == 1:
            return max(e[2] for e in events)

        for i in range(n - 1, -1, -1):
            end = events[i][1]
            left, right = i + 1, n
            while left < right:
                mid = (left + right) // 2
                if events[mid][0] > end:
                    right = mid
                else:
                    left = mid + 1
            idx = left

            for j in range(k - 1, -1, -1):
                dp[i][j] = max(dp[i + 1][j], dp[idx][j + 1] + events[i][2])

        return dp[0][0]