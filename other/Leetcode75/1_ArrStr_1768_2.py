class Solution:
    def mergeString(word1, word2):
        res = []
        for i in range(min(len(word1), len(word2))):
            res.append(word1[i] + word2[i])
        return "".join(res) + word1[i + 1 :] + word2[i + 1 :]


ans = Solution.mergeString("abcd", "zyr")
print(ans)
