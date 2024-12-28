# 문제 1
# (Pair의 합 검사):
# 길이가 N인 배열이 주어질 때, 이 배열에서 두 수를 선택하여 pair를 형성하고,
# 해당 pair의 합이 홀수인 경우 True를 반환하고, 합이 짝수인 경우 False를 반환하는 함수를 작성해야 합니다.

# 예를 들어, 배열 [2, 3, 5, 8]가 주어진 경우,
# (2, 3), (5, 8)와 같이 pair를 형성할 수 있으며,

# 각 pair의 합은 각각 5와 13으로 모두 홀수입니다.

# 따라서 이 경우에는 True를 반환해야 합니다.


def has_odd_pair_sum(arr):
    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):
            if (arr[i] + arr[j]) % 2 == 1:
                return True
    return False


# 예제 배열
array1 = [2, 3, 5, 8]
array2 = [2, 4, 6, 8]

print(has_odd_pair_sum(array1))  # True
print(has_odd_pair_sum(array2))  # False
