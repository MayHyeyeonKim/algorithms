# def uniquePaths(self, m, n):
#     dp = [[1] * n for _ in range(m)]
#     for mGuy in range(1, m):
#         for nGuy in range(1, n):
#             dp[mGuy][nGuy] = dp[mGuy - 1][nGuy] + dp[mGuy][nGuy - 1]
#     return dp[m - 1][n - 1]


class Solution:
    def uniquePaths(self, m, n):
        dp = [[1] * n for _ in range(m)]
        for mGuy in range(1, m):
            for nGuy in range(1, n):
                dp[mGuy][nGuy] = dp[mGuy - 1][nGuy] + dp[mGuy][nGuy - 1]
        return dp[m - 1][n - 1]


# 예시 입력
m = 3
n = 7

# Solution 클래스의 인스턴스 생성
solution = Solution()

# 함수 호출 및 결과 출력
result = solution.uniquePaths(m, n)
print(f"Unique paths for {m}x{n} grid: {result}")
