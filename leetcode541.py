class Solution:
    def reverseStr(self, s:str, k:int):
        s = list(s)
        for i in range(0, len(s), 2*k):
            s[i:i+k] = reversed(s[i:i+k])
        return "".join(s)
    
result = Solution()
answer = result.reverseStr("abcde",2)
print(answer)