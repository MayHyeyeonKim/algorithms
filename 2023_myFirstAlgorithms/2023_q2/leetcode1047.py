# s="abbaca"가 있을 때, 인접한 중복되는 letters를 삭제하고 남은 letters만 반환하는 문제

# 1. 스택을 만들어 둔다. (맨 나중에 스택에 담아서, 담겨있는 letters를 스트링으로 묶어서 리턴할꺼임)
# 2. for s를 돌며 letter를 하나하나 읽는다.
#     - 스택에 letter를 append해준다.
#     - 스택이 비어있지 않고 맨 마지막 letter가 있다면, 그 것이 현재 바라보고 있는 letter와 같다면 팝해줄거다.
# 3. 1번에서 만들어둔 스택에 뭐가 남아있는지 확인하고 이거를 스트링으로 묶어서 리턴할거다.
# * 2번에서 스택에 넣는 작업을 else로 두고, letter와 현재 바라보는 letter가 같은지 확인하는 작업을 if로 둔다.


class Solution:
    def removeDuplicates(self, s: str) -> str:
        stack = []

        for char in s:
            if stack and stack[-1] == char:
                stack.pop()
            else:
                stack.append(char)
        return "".join(stack)
