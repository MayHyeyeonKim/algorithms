def isPerfectSquare(num) -> bool:
    left,right = 1, num
    while left <= right:
        mid = (left+right)//2
        if mid * mid < num:
            left = mid+1
        elif mid * mid > num:
            right = mid-1
        else:
            return True
    return False

# result = isPerfectSquare(16)
result = isPerfectSquare(17)
print(result)