# slicing
import re


class Solution:
    def isPalindrome(self, s: str):
        s = s.lower()
        s = re.sub("[^a-z0-9]", "", s)  # s 문자열에서 알파벳 소문자와 숫자가 아닌 문자들을 모두 제거한 결과를 반환

        return s == s[::-1]


# 정규 표현식에서 ^는 문자열의 시작을 의미
