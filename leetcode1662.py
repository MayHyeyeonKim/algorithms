#두 문자열 배열이 동일한 문자열을 나타내는지 확인하는 함수

class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        str1 = "".join(word1)
        str2 = "".join(word2)

        return str1 == str2
        