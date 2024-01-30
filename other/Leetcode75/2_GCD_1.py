class Solution:
    def gcdOfStrings(self, str1, str2):
        # Check if concatenated strings are equal or not, if not return ""
        if str1 + str2 != str2 + str1:
            return ""
        # If strings are equal than return the substring from 0 to gcd of size(str1), size(str2)
        from math import gcd

        return str1[: gcd(len(str1), len(str2))]


str1 = "YOU"
str2 = "YOUTUBE"

sol = Solution()
ans = sol.gcdOfStrings(str1, str2)
print(ans)
