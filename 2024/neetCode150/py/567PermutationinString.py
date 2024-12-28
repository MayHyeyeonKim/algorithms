class Solution:
    def checkInclusion(self, s1, s2):
        # [approach1]
        #순열 ! 팩토리얼 
        # abc 3*2*1 -> m! 
        # s2 = "eidbaooo" n = len(s2)
        # O(m! * n) -> 
        # 10^4! 

        # [approach2]
        # 정렬 : 
        # s1 = "ab", s2 = "eidbaooo" abdeiooo
        # s1 -> sort nlogn * n
        # - s1정렬하기 nlogn
        # - s2 돌아보기 n 
        # - s2의 섭스트링 정렬하기 nlogn * n = O(n^2logn) 
        #공간복잡도: O(n)

        # for i in range len(s2): s2를 0번 인덱스 s1의 길이만큼(윈도우크기) 돌아본다. -> len(s2)- (len(s1)-1)까지 돈다.
            #sort_sub_string 윈도우 크기만큼 sub-string을 sort해준다.
            #if sort_sub_string == s1 : return true
        # return false
        n = len(s2)
        sorted_s1 = ''.join(sorted(s1))
        for i in range(n - (len(s1)-1)):
            sort_sub_string = s2[i:i+len(s1)]
            sorted_sort_sub_string = ''.join(sorted(sort_sub_string))
            if sorted_sort_sub_string == sorted_s1:
                return True
        return False

s1 = "ab"
s2 = "eidbaooo"
solution = Solution()
res = solution.checkInclusion(s1, s2)
print(res)