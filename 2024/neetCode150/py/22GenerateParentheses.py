class Solution:
    def generateParenthesis(self, n):
        result = []

        def dfs(text, opening, closing):
            if opening == n and closing == n:
                return result.append(text)
            if opening > n or closing > opening:
                return
            dfs(text+"(" , opening + 1 , closing)
            dfs(text+")", opening, closing + 1)
        dfs("",0,0)
        return result

n = 2
sol = Solution()
print(sol.generateParenthesis(n))

# tc = O(n^2)
# sc = O(n^2)