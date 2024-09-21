class Solution:
    def decodeString(self, s: str) -> str:
        stack = []
        currentNum = 0
        currentString = ''

        for c in s:
            if c =='[':
                stack.append(currentString)
                stack.append(currentNum)
                currentString = ''
                currentNum = 0
            elif c == ']':
                num = stack.pop()
                lastString = stack.pop()
                currentString = lastStringㅁ + num * currentString
            elif c.isdigit():
                currentNum = currentNum*10 + int(c)
            else:
                currentString += c
        return currentString
    

# 함수 decodeString(s 문자열) 선언:
#     stack을 빈 리스트로 초기화
#     currentNum을 0으로 초기화 (현재 숫자를 저장할 변수)
#     currentString을 빈 문자열로 초기화 (현재 문자열을 저장할 변수)

#     문자열 s의 각 문자 c에 대해 반복:
#         만약 c가 '['이라면:
#             currentString을 stack에 추가
#             currentNum을 stack에 추가
#             currentString을 빈 문자열로 초기화
#             currentNum을 0으로 초기화

#         만약 c가 ']'이라면:
#             stack에서 숫자를 pop하여 num에 저장
#             stack에서 문자열을 pop하여 lastString에 저장
#             currentString을 lastString + (num * currentString)으로 설정

#         만약 c가 숫자라면:
#             currentNum을 currentNum * 10 + int(c)로 업데이트 (연속된 숫자 처리)

#         그 외 (알파벳 문자일 경우):
#             currentString에 c를 추가

#     반복이 끝난 후 currentString을 반환
