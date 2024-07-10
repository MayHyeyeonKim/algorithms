class Solution:
    def numDecodings(self, s: str) -> int:
        if s[0] == '0':
            return 0

        n = len(s)
        p1, p2 = 1, 1

        for i in range(2, n + 1):
            curr = 0
            if 1 <= int(s[i - 1]) <= 9:
                curr += p1

            if 10 <= int(s[i - 2:i]) <= 26:
                curr += p2

            p2, p1 = p1, curr
        return p1