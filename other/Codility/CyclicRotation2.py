def solution(A, K):
    N = len(A) - 1

    if N < 2:
        return A

    if K >= N:
        K = K % N

    a = A[N - K :] + A[: N - K]
    print("a ", a)
    print("A[N-K:] ", A[N - K :])
    print("A[:N-K] ", A[: N - K])
    print("A[K:] ", A[K:])
    print("A[:N] ", A[:N])


A = [3, 8, 9, 7, 6]
K = 3
print(solution(A, K))
