
class Solution:
    def isValid(self, s):
        # closeToOpen = {
        #     ")" : "(",
        #     "}" : "{",
        #     "]" : "["
        # }
        # stk = []
        # for p in s:
        #     if p in closeToOpen:
        #         if stk and stk[-1] == closeToOpen[p]:
        #             stk.pop()
        #         else:
        #             return False
        #     else:
        #         stk.append(p)
        # return not stk

        stk = []
        for p in s:
            if p == "(":
                stk.append(")")
            elif p == "{":
                stk.append("}")
            elif p == "[":
                stk.append("]")
            elif not stk or stk.pop() != p:
                return False
        return not stk


s = ("(){}[]")
sol = Solution()
result = sol.isValid(s)
print(result)