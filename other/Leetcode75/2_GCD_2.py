# recursion
def gcdOfStrings(str1, str2):
    if str1 + str2 != str2 + str1:
        return ""
    if str1 == str2:
        return str1
    if len(str1) > len(str2):
        return gcdOfStrings(str1[len(str2) :], str2)
    else:
        return gcdOfStrings(str1, str2[len(str1) :])


str1 = "abc"
str2 = "abcabc"
ans = gcdOfStrings(str1, str2)
print(ans)
