def twosum(nums, target):
    nums.sort()
    n = len(nums)
    l,r = 0, n-1
    while l<r:
        if nums[l] + nums[r] > target:
            r -= 1
        elif nums[l] + nums[r] < target:
            l += 1
        elif nums[l] + nums[r] == target:
            return True
    return False

result = twosum([1,2,3,4,5], 8)
print(result)