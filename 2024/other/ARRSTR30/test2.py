#문제 : 가장 긴 문자열을 만들어라, 연속해서 2개 이상 같은 문자 나오면 한번 끊어라


class Solution:
    def generate_string(A,B,C):
        total = A+B+C
        array = []
        result = ""
        for i in range(total):
            if something: #A가 가장 많을 때
                pass
                if something: #2보다 크거나 같고 맨마지막과 마지막의 앞에꺼가 "A"
                    pass
                else:
                    array.append("A")
                    A -= 1 
            elif: #B가 가장 많을 때
                pass
            elif: #C가 가장 많을 때
                pass
        result = "".join(array)
        return result

sol = Solution
A1 = 6
B1 = 2
C1 = 1
ans = sol.generate_string(A1,B1,C1)
print(ans)