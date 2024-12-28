class Solution:
    def letterCombinations(self, digits):
        dic = {
            "2" : "abc",
            "3" : "def",
            "4" : "ghi",
            "5" : "jkl",
            "6" : "mno",
            "7" : "pqrs",
            "8" : "tuv",
            "9" : "wxyz"
            }
        result = []
        def backtrack(i,s):
            if i == len(digits):
                result.append(s)
                return
            for d in dic[digits[i]]:
                backtrack(i+1,s+d)

        if digits:
            backtrack(0,"")
        return result

digits = "23"
sol = Solution()
res = sol.letterCombinations(digits)
print(res)