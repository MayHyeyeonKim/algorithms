class Solution:
    def mergeString(self, word1, word2):
        merged = []
        for i in range(max(len(word1), len(word2))):
            if i < len(word1):
                merged.append(word1[i])
            if i < len(word2):
                merged.append(word2[i])
        result = "".join(merged)
        # result = "".join(merged) + word1[i + 1 :] + word2[i + 1 :]
        result2 = result.replace(",", "")
        return result2


word1 = "a,b,c"
word2 = "1,2,3,4"
sol = Solution()
ans = sol.mergeString(word1, word2)
print(ans)
