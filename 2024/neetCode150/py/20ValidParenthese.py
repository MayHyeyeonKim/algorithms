class Solution:
    def isValid(self, s):
        closeToOpen = {
            ")" : "(",
            "}" : "{",
            "]" : "["
        }
        stk = [] 
        for c in s: 
            if c in closeToOpen:
                if stk and stk[-1] == closeToOpen[c]:
                    stk.pop()
                else:
                    return False
            else:
                stk.append(c)
        return not stk
    
s = "(({[}])"
solution = Solution()
res = solution.isValid(s)
print(res)