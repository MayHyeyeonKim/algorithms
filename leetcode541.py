class Solution:
    def reverseStr(self, s:str, k:int):
        s = list(s)
        for i in range(0, len(s), 2*k):
            s[i:i+k] = reversed(s[i:i+k])
        return "".join(s)
        # return s.append(s) #None
    
result = Solution()
answer = result.reverseStr("abcde",2)
print(answer)

# 접근
# - 먼저, 스트링의 길이만큼 첨부터 다 돌면서, 2배수씩 깡충깡충 넘어서 쪼갠다 (step수를 2k라고 표기하니 신텍스 오류나서 2*k 라고 표시해줬다.)
# - 그리고 그 쪼갠 블럭들을 리버스해준다. 이렇게 하면 남은 1개는 바뀌지 않는다.
# - 리스트에 join으로 만들어진 각 요소들을 결합하여 문자열로 만들어 조인시킨다.
#join : 리스트의 각 요소를 문자열로 결합하여 새로운 문자열을 만듭니다. 예를 들어, 리스트 ['a', 'b', 'c']에 대해 "".join(['a', 'b', 'c'])는 'abc' 문자열을 반환합니다.
#append : 리스트의 끝에 새로운 요소를 추가합니다. 예를 들어, 리스트 [1, 2, 3]에 대해 [1, 2, 3].append(4)는 리스트 [1, 2, 3, 4]를 반환합니다.