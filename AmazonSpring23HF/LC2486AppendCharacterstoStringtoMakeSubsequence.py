class Solution:
    def appendCharacters(self, s: str, t: str) -> int:
        i, j = 0, 0

        # t의 문자를 s에서 순서대로 찾음
        while i < len(s) and j < len(t):
            if s[i] == t[j]:
                j += 1  # t의 다음 문자로 이동
            i += 1  # s의 다음 문자로 이동

        # t의 남은 문자 수가 추가해야 할 문자 수
        return len(t) - j
