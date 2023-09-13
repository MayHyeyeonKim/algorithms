from typing import List

class Solution:
    def reverseString(self, s: list[str]):
        x = len(s)
        j = -1
        for i in range(x//2):
            s[i], s[j] = s[j], s[i]
            j -=1

s = ["h", "e", "l", "l", "o"]
result = Solution()
result.reverseString(s)
print(s)

#접근
#리스트를 반으로 쪼개서 거울처럼 반사시켜 점점 안으로 들어갈 수 있게 한다.
#그 방법은 맨앞의문자와 맨뒤의 문자를 바꾸고, 맨앞의문자의 오른쪽것과 맨뒤의문자의 왼쪽것을 바꾼다. 이것을 반복한다.
#j가 끝나는 지점은 i과 교차하는 곳이 끝나는 곳
#빅오는 어떻게 될까? n의 절반만 도니...아니. 절반만 돌아도 n임!