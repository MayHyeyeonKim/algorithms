def gcd(str1,str2):
    if str1+str2 != str2+str1:
        return ""
    
    def gcdEuclidean(a,b):
        while b:
            a,b = b, a%b
        return a
    
    length = gcdEuclidean(len(str1), len(str2))
    return str1[:length]

str1 = "ABCABC"
str2 = "ABC"
ans = gcd(str1,str2)
print(ans)