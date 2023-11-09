def solution(A):
    dict = {}
    oddele = -1
    for i in A:
        dict[i] = 0
    for i in A:
        dict[i] += 1
    for key in dict:
        if dict[key] % 2 != 0:
            oddele = key
    return oddele


A = [9, 3, 9, 3, 9, 7, 9]
result = solution(A)
print(result)

# 문제가 이렇게 주어졌는데 실상은 [9,3,9,3,9,7,9]이지
# A[0] = 9
# A[1] = 3
# A[2] = 9
# A[3] = 3
# A[4] = 9
# A[5] = 7
# A[6] = 9
# 여기서 짝이 맞지 않는 값리턴해달라

# 딕셔너리에 담고, 딕셔너리에 같은값이 있으면 +=1해주고, 딕셔너리를 돌며 2로 나눠서 0이 아니면 걔가 짝이 없는거니 리턴함
