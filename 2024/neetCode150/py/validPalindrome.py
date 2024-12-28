class Solution:
    def isPalindrome(self, s: str) -> bool:
        left, right = 0, len(s)-1
        while left < right:
            while not self.alphaNum(s[left]):
                left += 1
            while not self.alphaNum(s[right]):
                right -= 1
            if s[left].lower() != s[right].lower():
                return False
            left, right = left+1, right-1
        return True
        
    def alphaNum(self, c):
        return (ord('0') <= ord(c) <= ord('9') or ord('a') <= ord(c) <= ord('z') or ord('A') <= ord(c) <= ord('Z'))
    

s = "A man, a plan, a canal: Panama"
soultion = Solution()
result = soultion.isPalindrome(s)
print(result)


# 4번줄에서는 while left < right: <- 루프를 돌기위해 left포인터와 right포인터가 만나기 전까지만 반복을 수행하고
# 5번과 7번줄에서는 left < right조건은  
