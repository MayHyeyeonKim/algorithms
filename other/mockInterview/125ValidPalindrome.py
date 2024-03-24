class Solution:
    def isPalindrome(self, s):
        def helper(c):
            return (ord("0")<= ord(c)<=ord("9") or ord("a")<= ord(c)<=ord("z") or ord("A")<= ord(c)<=ord("Z"))
    
        left, right = 0, len(s)-1
        while left < right:
            if not helper(s[left]):
                left += 1
                continue
            if not helper(s[right]):
                right -= 1
                continue
            if s[left].lower() != s[right].lower():
                return False
            else:
                left += 1
                right -= 1
        return True

# s = " "
s = "A man, a plan, a canal: Panama"
sol = Solution()
result = sol.isPalindrome(s)
print(result)