# 1492. The kth Factor of n

# 숫자n과 숫자k가 주어지면, n의 k번째 약수를 찾아야 한다
# 약수란? 어떤 수 n을 나눴을 때 나머지가 0이 되는 수 12의 약수는 1,2,3,4,6,12
# 이 문제에서는 k번째 약수를 찾으라는거니까 12의 3번째 약수는 3

# 문제 해결:
# 1. 숫자 n의 약수를 모두 구한다.
# 2. 약수를 작은 것부터 나열한다.
# 3. 그 중에서 k번째 약수를 찾는다.

# 숫자 n과 k를 받는다
# 약수를 저장할 리스트를 만든다.
# 1~n까지 모든 숫자에 대해서 n이 그 숫자로 나눠지는지 확인한다. (즉 약수인지 확인해본다)
#   -만약 나눠진다면, 그 숫자를 리스트에 추가한다.
# 리스트의 길이가 k보다 작으면, 약수가 부족하니 -1 반환
# 그렇지 않으면, 리스트에서 k번쨰 약수를 반환한다.

# TC: O(n) SC: O(n)

def kthFactor(n, k):
    divisors = []
    for i in range(n+1):
        if n % i == 0:
            divisors.append(i)

    if len(divisors) < k:
        return -1

    return divisors[k-1]


result = kthFactor(n=12, k=3)
print(result)