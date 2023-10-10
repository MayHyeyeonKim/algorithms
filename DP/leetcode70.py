class Solution:
    def climbStairs(n):
        if n == 1:
            return 1
        elif n == 2:
            return 2

        prev1 = 1  # 한칸씩 전진하는 경우의수
        prev2 = 2  # 두칸씩 전진하는 경우의 수
        curr = 0

        for _ in range(2, n):
            curr = prev1 + prev2  # prev1과 prev2의 경우의 수를 더한거를 curr이라 선언
            prev1 = prev2  # prev2를 한칸 앞으로 업뎃
            prev2 = curr
        return curr


sol = Solution
n = 4
ans = sol.climbStairs(n)
print(ans)
