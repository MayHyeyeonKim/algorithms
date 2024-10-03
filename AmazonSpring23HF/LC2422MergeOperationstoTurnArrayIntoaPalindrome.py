def min_merge_operations(arr):
    left = 0
    right = len(arr) - 1
    count = 0

    while left < right:
        # 양쪽 숫자가 같을 때
        if arr[left] == arr[right]:
            left += 1
            right -= 1
        # 왼쪽 숫자가 더 작을 때
        elif arr[left] < arr[right]:
            arr[left + 1] += arr[left]  # 왼쪽 숫자를 합칩니다.
            left += 1
            count += 1
        # 오른쪽 숫자가 더 작을 때
        else:
            arr[right - 1] += arr[right]  # 오른쪽 숫자를 합칩니다.
            right -= 1
            count += 1

    return count