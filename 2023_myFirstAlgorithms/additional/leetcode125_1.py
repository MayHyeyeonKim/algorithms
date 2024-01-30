# list로 변환


class Solution:
    def isPalindrome(self, s: str):
        strs = []
        for char in s:
            if char.isalnum():
                strs.append(char.lower())  # strs에 넣는 작업

        while len(strs) > 1:  # palindrome 여부 판별
            if strs.pop(0) != strs.pop():
                return False
        return True
