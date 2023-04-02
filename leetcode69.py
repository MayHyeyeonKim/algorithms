class Solution:
    def mySqrt(self, x: int) -> int:
        left, right = 1, x
        while left<=right:
            mid = (left+right) //2
            mid_sqrt = mid * mid
            if mid_sqrt < x:
                left = mid + 1
            elif mid_sqrt > x:
                right = mid - 1
            else: 
                return mid
        return right
        
x=8
result = Solution()
answer = result.mySqrt(x)
print(answer)