class Solution:
    def lengthOfLongestSubstring(self, s):
        # 슬라이딩 윈도우
        # - 부분 문자열에 중복 문자가 없다면 종료 포인터를 앞으로 움직여 부분 문자열을 늘린다.
        # - 부분 문자열에 중복 문자가 있다면 시작 포인터를 앞으로 움직여 부분 문자열을 줄이고 시작 포인터가 가리키고 있던 문자를 세트에서 지운다. 시작포인터를 한칸 앞으로
        #          v
        # aabcbbeacc
        #          ^
        # 세트 = {c}
        # 최대 길이 = 4

        max_len = 0
        start,end = 0,0
        chars = set()
        while end < len(s): #end가 문자열을 벗어나지 않는 한
            if s[end] in chars:
                chars.remove(s[start])
                start += 1
            else:
                chars.add(s[end])
                max_len = max(end-start+1, max_len)
                end += 1
        return max_len

# TC = O(2n) = O(n)
# SC = O(n)
    
s= "abcabcbb"
sol = Solution()
print(sol.lengthOfLongestSubstring(s))