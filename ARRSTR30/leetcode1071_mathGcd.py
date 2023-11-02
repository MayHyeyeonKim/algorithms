# greatest common division

def gcd(str1,str2):
    if str1+str2 != str2+str1:
        return ""
    from math import gcd
    return str1[:gcd(len(str1),len(str2))]

str1 = "ABCABC"
str2 = "ABC"
result = gcd(str1,str2)
print(result)