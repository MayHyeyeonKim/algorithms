class Solution:
    def addBin(self,a:int, b:int):
        return bin(int(a,2)+int(b,2))[2:]
    
result = Solution()
answer = result.addBin("11","1")
print(answer)