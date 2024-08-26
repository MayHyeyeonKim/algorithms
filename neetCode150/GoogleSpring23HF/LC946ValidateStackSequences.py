class Solution:
    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:
        stack = []
        j = 0
        
        for x in pushed:
            stack.append(x)  # pushed 배열의 요소를 스택에 푸시
            while stack and stack[-1] == popped[j]:  # 스택의 최상단 요소와 popped 배열의 현재 요소가 같으면
                stack.pop()  # 스택에서 팝
                j += 1  # popped 배열의 다음 요소로 이동
        
        return not stack  # 스택이 비어 있으면 True, 그렇지 않으면 False