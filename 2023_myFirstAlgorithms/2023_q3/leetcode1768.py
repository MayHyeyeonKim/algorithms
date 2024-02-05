def mergeAlternately(word1, word2):
    result = []
    for i in range(min(len(word1), len(word2))):
        result.append(word1[i] + word2[i])
    return "".join(result) + word1[i + 1 :] + word2[i + 1 :]


r = mergeAlternately("abc", "opqrstu")
print(r)


# T.C : O(n) / S.C : O(n)
