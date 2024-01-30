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
                print (stk.pop())
                return False
        return not stk

s = Solution()
result = s.isValid("(){}[]")
print(result)



# elif not stk or stk.pop() != p: 
# 스텍이 비어있으면 True 이니 뒤에 것을 볼 필요도 없이 4번 라인으로 올라간다. 이 부분이 False 이면 OR 뒷부분 살펴본다. 
# pop할 그 요소가 p와 같지 않다면 True | pop할 그 요소가 p와 같다면 False <- 이때 True이면 12번 라인으로 False면 4번라인으로 올라간다. 