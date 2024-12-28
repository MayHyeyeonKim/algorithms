def twoSum(nums, target):
    dict = {}
    for i, n in enumerate(nums):
        if n in dict:
            return dict[n], i
        else:
            dict[target - n] = i


result = twoSum([2, 7, 11, 15], 9)
print(result)
