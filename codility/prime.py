def is_prime(num):
    if num < 2:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True


def find_nearest_primes(n):
    # 숫자를 증가시키며 가장 가까운 큰 소수 찾기
    larger_prime = n
    while True:
        larger_prime += 1
        if is_prime(larger_prime):
            break

    # 숫자를 감소시키며 가장 가까운 작은 소수 찾기
    smaller_prime = n
    while True:
        smaller_prime -= 1
        if is_prime(smaller_prime):
            break

    return smaller_prime, larger_prime


# 테스트
input_number = 20
smaller, larger = find_nearest_primes(input_number)
print(f"가장 가까운 큰 소수: {larger}")
print(f"가장 가까운 작은 소수: {smaller}")
