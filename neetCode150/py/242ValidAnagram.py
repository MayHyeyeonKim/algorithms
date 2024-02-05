class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        dict_s = {}
        dict_t = {}
        for w in s:
            if w in dict_s:
                dict_s[w] += 1
            else:
                dict_s[w] = 1
        
        for m in t:
            if m in dict_t:
                dict_t[m] += 1
            else:
                dict_t[m] = 1
        
        if dict_s == dict_t:
            return True
        return False

solution = Solution()
s = "anagram" 
t = "nagaram"
res = solution.isAnagram(s,t)
print(res)