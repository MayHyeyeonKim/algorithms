for n in range(2, 20):
    for x in range(2, n):
        if n % x == 0:
            print(n, "은/는 소수가 아닙니다.")
            break
    else:
        print(n, "은/는 소수입니다.")
