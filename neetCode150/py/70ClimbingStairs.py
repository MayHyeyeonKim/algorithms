class Solution: #O(n) O(n)
    def climbStairs(self, n):
        memo = {}
        def fib(n):
            if n in memo:
                return memo[n]
            if n == 0 or n == 1:
                return 1
            memo[n] = fib(n-1) + fib(n-2)
            return memo[n]
        return fib(n)


sol = Solution()
print(sol.climbStairs(n = 3))