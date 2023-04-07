#palindrome
#공부한 reverse 사용함 오예~

def isPalindrome (x : int):
    x =str(x)
    reversed_x = "".join(reversed(x))

    if x == reversed_x:
        return True
    else:
        return False
    
reuslt = isPalindrome(121)
reuslt2 = isPalindrome(123)
print(reuslt2)