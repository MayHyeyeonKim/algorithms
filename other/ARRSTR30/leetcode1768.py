def mergeAlternately(word1, word2):
    word3 = []
    for i in range(min(len(word1), len(word2))):
        word3.append(word1[i])
        word3.append(word2[i])
    word3.append(word1[i+1:])
    word3.append(word2[i+1:])
    joinnin = "".join(word3)
    return joinnin

word1 = "abc"
word2 = "1234567"

ans = mergeAlternately(word1,word2)
print(ans)