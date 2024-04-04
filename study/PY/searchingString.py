# string = "hellohelloworldabc"
# pattern = "helloworld"

string = "aebcdefg" #7
pattern = "efg" #3 #index=4:

# [Approach 1 - Using in Operator]
# if pattern in string:
#     index = string.index(pattern)
#     print("Pattern found at index:", index)

# [Approach 2 - Double For Loop]
# for i in range(len(string) - len(pattern) + 1):
#     found = True
#     for j in range(len(pattern)):
#         if string[i + j] != pattern[j]:
#             found = False
#             break
#     if found:
#         print("Pattern found at index:", i)

# [Approach 3 - Rabin-Karp Algorithm]
# - using hashing to find any one of a set of pattern strings in a string.
def rabin_karp(string, pattern):
    pattern_hash = hash(pattern)
    string_hash = hash(string)

    for i in range(len(string) - len(pattern) + 1):
        if string_hash == pattern_hash and string[i:i+len(pattern)] == pattern:
            return i
        if i < len(string) - len(pattern): #7-3=4
            string_hash = hash(string[i+1:i+len(pattern)+1])
    return -1 

index = rabin_karp(string, pattern)
if index != -1:
    print("Pattern found at index:", index)
else:
    print("pattern not found")