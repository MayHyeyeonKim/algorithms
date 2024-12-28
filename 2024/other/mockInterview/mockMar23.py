"""
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

anagram
s = "rat" 
t = "tar"
return True

r, a, t == t, a, r

anagram
s = "rat" 
t = "tar"
return True

s = "rat"
t = "car"
return False

s=""
t=""
return True

s="r"
t="rr"
return False

[approach1]
sorted(s) != sorted(t) 

return False

time complexity: O(nlogn + mlogm) 
space complexity: O(n+m)

[approach2]
hashmap -> dict
s_dict = {
            "r" : 1,
            "a" : 1,
            "t" : 1
} 
t_dict = {
            "t" : 1,
            "a" : 1,
            "r" : 1
}

if s_dict == t_dict:
    return True

time comp: O(n+m)
space comp: O(n+m)

# input: s = “Rat” -> lower(), t = “tar” -> lower() reture True 

valid Parenthese
dict, stk  -> O(n) O(n)
stk -> O(n), O(n)

dict + stk -> easier to modify
stk -> simpler, easier to understand
"""
class Solution:
    def isAnagram(self, s, t):
        s_dict = {}
        t_dict = {}

        for c in s:
            if c in s_dict:
                s_dict[c] += 1
            else:
                s_dict[c] = 1
        
        for c in t:
            if c in t_dict:
                t_dict[c] += 1
            else:
                t_dict[c] = 1

        if s_dict == t_dict:
            return True
        return False

# s = ""
# t = ""
# sol = Solution()
# result = sol.isAnagram(s, t)
# print(result)


# default dict "c":0
def make_character_dict(s):
    ret = {}
    for c in s:
        if c in ret:
            ret[c] += 1
        else:
            ret[c] = 1
    # #outputs a dictionary
    return ret

def isAnagram(s, t):
    s_dict = make_character_dict(s)
    t_dict = make_character_dict(t)

    return s_dict == t_dict

    # return make_character_dict(s) == make_character_dict(t)

s = "rat"
t = "tar"

print(isAnagram(s, t))