def solution(N):
    factor_of_positive_ints = 1
    count = 0
    while factor_of_positive_ints * factor_of_positive_ints < N:
        if N / factor_of_positive_ints % 1 == 0:
            count += 2
        factor_of_positive_ints += 1
    if factor_of_positive_ints * factor_of_positive_ints == N:
        count += 1
    return count


N = 24
print(solution(N))
