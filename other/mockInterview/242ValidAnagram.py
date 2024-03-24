class Solution:
    def isAnagram(self, s, t):
        s_dic = {}
        t_dic = {}

        for c in s:
            if c in s_dic:
                s_dic[c] += 1
            else:
                s_dic[c] = 1
        
        for c in t:
            if c in t_dic:
                t_dic[c] += 1
            else:
                t_dic[c] = 1
        
        # print(s_dic)
        if s_dic == t_dic:
            return True
        return False

s = "anagram"
t = "nagaram"
sol = Solution()
result = sol.isAnagram(s,t)
print(result)