# class Solution:
#     def reverseWords1(self, s:str):
#         words = s.split()
#         reversed_words = [word[::-1] for word in words]
#         return ' '.join(reversed_words)
    

class Solution:
    def reverseWords2(self, s: str):
        words = s.split()
        reversed_words =[]
        for word in words:
            reversed_words.append(word[::-1])
        return reversed_words   #이렇게 하니 출력이 리스트로 나와서 망함 ["s'teL", 'ekat', 'edoCteeL', 'tsetnoc']    
        # return ' '.join(reversed_words)

result = Solution()
s = "Let's take LeetCode contest"
answer = result.reverseWords2(s)
print(answer)

# 접근
# 1. 띄어쓰기로 쪼갠다
# 2. 그걸 돌면서 까꾸로 뒤집은 걸 촥촥 넣는다.
# 3. 반환! 이때 주의!! reversed_words는 리스트이고, ' '.join(reversed_words)는 리스트를 공백으로 구분된 하나의 문자열로 만드는 것!!
# reversed_words.append(word[::-1])은 단어를 뒤집은 후 reversed_words 리스트에 추가. 즉, reversed_words는 뒤집힌 단어들의 리스트!
# return ' '.join(reversed_words)는 reversed_words 리스트를 문자열로 변환하여 반환. join() 함수는 리스트의 모든 요소들을 하나의 문자열로 결합시키는 함수!