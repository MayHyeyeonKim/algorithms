def two_sum(nums,target):
    dict = {}
    for v in nums:
        dict[v] = '아무거나'
    
    for v in nums:
        needed_num = target - v
        if needed_num in dict:
            return v,needed_num
    return False

# two_sum([4,5,6,7,8], 12)
result = two_sum([4,5,6,7,8], 12)
print(result)