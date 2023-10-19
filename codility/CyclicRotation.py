# A = [3, 8, 9, 7, 6]
# K = 3

#     [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
#     [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
#     [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]


def solution(A, K):
    # Implement your solution here
    if len(A) == K or len(A) == 0:
        return A
    else:
        for _ in range(K):
            A = A[::-1]
            A = [A[0]] + A[len(A) : 0 : -1]
        return A


A = [3, 8, 9, 7, 6]
K = 3
print(solution(A, K))
