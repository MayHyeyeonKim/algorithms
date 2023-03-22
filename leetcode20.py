class Solution:
    def isValid(self, s: str) -> bool:
        stk = []
        for p in s:
            if p == '(':
                stk.append(')')
            elif p == '{':
                stk.append('}')
            elif p == '[':
                stk.append(']')
            elif not stk or stk.pop() != p:
                return False
        return not stk

s = Solution()
result = s.isValid("(()){}[[]]")
print(result)
