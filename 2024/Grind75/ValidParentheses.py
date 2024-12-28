class Solution:
    def isValid(self, s: str) -> bool:
        stk = []
        for e in s:
            if e == "(":
                stk.append(")")
            elif e == "[":
                stk.append("]")
            elif e == "{":
                stk.append("}")
            elif not stk or stk.pop() != e:
                return False
        return not stk
        

class Solution:
    def isValid(self, s: str) -> bool:
        stk = []
        dict = {")": "(", "}":"{", "]":"["}
        for e in s:
            if e not in dict:
                stk.append(e)
            elif not stk or dict[e] != stk.pop():
                return False
        return not stk