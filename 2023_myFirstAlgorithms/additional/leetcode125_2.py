# 데크 자료형을 이용한 최적화
import collections
from collections import deque


class Solution:
    def isPalindrome(self, s: str):
        strs: deque = deque()

        for char in s:
            if char.isalnum():
                strs.append(char.lower())

        while len(strs) > 1:
            if strs.popleft() != strs.pop():
                return False
        return True
