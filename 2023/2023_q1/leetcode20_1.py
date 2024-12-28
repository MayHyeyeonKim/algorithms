class Solution:
    def isValid(self, s: str) -> bool:
        stk = []
        table = {")": "(", "}": "{", "]": "["}
        for c in s:
            if c not in table:
                stk.append(c)
            elif not stk or table[c] != stk.pop():
                return False
        return len(stk) == 0
