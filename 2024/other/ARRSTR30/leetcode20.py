class Solution:
    def isValid(self, s):
        stk = []
        for p in s:
            if p == "(":
                stk.append(")")
            elif p == "{":
                stk.append("}")
            elif p == "[":
                stk.append("]")
            elif not stk or stk.pop() != p:
                return False  # stk에 원소가 존재하고 stk.pop()의 결과가 p와 같을 때, 이 조건은 False가 되지 않음. 따라서 아무런 값도 반환하지 않고 다음 반복으로 진행.
        return not stk


s = "()[]{}"
sol = Solution()
ans = sol.isValid(s)
print(ans)
