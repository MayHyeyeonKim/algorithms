memo = {0:0, 1:1}
class Solution:
        def fib(self, n: int) -> int:
            if n in memo:
                return memo[n]
            memo[n] = self.fib(n-1) + self.fib(n-2)
            return memo[n]

n=9
result = Solution()
answer = result.fib(n)
print(answer)

#메모에서 n이 한번씩만 호출되기 떄문에 시간복잡도가 드라마틱하게 O(n)으로 줄었다.