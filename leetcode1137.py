#1137 N-th Tribonacci Number

#절차적
class Solution:
    def tribonacci(self, n: int):
        if n == 0:
            return 0
        elif n ==1 or n == 2:
            return 1
        else:
            t0,t1,t2 = 0,1,1
            for i in range(3, n+1):
                t3 = t0+t1+t2
                t0,t1,t2 = t1,t2,t3
            return t3


#선언적
# def tribonacci(n: int) -> int:
#     if n == 0:
#         return 0
#     elif n == 1 or n == 2:
#         return 1
#     else:
#         return tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3)

n = 5
result = Solution()
answer = result.tribonacci(n)
print(answer)