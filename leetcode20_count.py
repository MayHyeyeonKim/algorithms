class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for p in s:
            if p in ['(', '{', '[']:
                stack.append(p)
            else:
                if not stack:
                    return False
                if p == ')' and stack[-1] != '(':
                    return False
                if p == '}' and stack[-1] != '{':
                    return False
                if p == ']' and stack[-1] != '[':
                    return False
                stack.pop()
        return not stack

s = Solution()
result = s.isValid("({[)}]")
print(result)
