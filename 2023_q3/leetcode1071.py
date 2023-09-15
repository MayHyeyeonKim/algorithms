from math import gcd


def findGcd(str1, str2):
    if str1 + str2 != str2 + str1:
        return ""
    return str1[: gcd(len(str1), len(str2))]


r = findGcd("abcabc", "abc")
print(r)
