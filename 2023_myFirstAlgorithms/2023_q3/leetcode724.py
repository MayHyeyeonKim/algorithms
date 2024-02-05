def pivotIndex(nums):
    totalSum = sum(nums)
    leftSum = 0

    for i, num in enumerate(nums):
        rightSum = totalSum - leftSum - num
        if rightSum == leftSum:
            return i
        leftSum += num
    return -1


exNums = [1, 2, 3, 4, 2, 2, 2]
exFunc = pivotIndex(exNums)
print(exFunc)


# T.C : O(n) / S.C : O(1)
