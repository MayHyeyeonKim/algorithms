class Solution:
    def isIsomorphic(self, s, t):
        return len({*zip(s,t)}) == len({*t}) == len({*s})

sol = Solution()
s = "egg"
t= "add"
result = sol.isIsomorphic(s,t)
print(result)
