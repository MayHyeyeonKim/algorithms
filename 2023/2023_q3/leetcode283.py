def moveZeroes(nums):
    # 이 알고리즘에서 배워야 할 스킬은 [i]번째와 [j]번째 자리 바꾸기 기술

    i = 0
    for j in range(len(nums)):
        if nums[j] != 0:
            nums[i], nums[j] = nums[j], nums[i]
            i += 1


nums = [1, 2, 0, 12, 0, 14]
moveZeroes(nums)
print(nums)

# T.C : O(n) / S.C : O(1)
