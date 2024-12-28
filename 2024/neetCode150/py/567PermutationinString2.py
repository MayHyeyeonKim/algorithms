class Solution:
    def checkInclusion(self, s1, s2):
        s2len = len(s2)
        window_len = len(s1)

        if s2len < window_len:
            return False

        s1map = [0]*26
        for letter in s1:
            s1map[ord(letter) - ord('a')] += 1

        s2map = [0]*26
        for letter in s2[:window_len]:
            s2map[ord(letter) - ord('a')] += 1

        for i in range(s2len - window_len):
            if s1map == s2map: return True
            s2map[ord(s2[i]) - ord('a')] -= 1
            s2map[ord(s2[i+window_len]) - ord('a')] += 1

        return s1map == s2map



s1 = "ab"
s2 = "eidbaooo"
solution = Solution()
res = solution.checkInclusion(s1,s2)
print(res)


# s1 = [0] * 26
# s2 = [[0] for _ in range(26)]
# print(s1)
# print(s2)