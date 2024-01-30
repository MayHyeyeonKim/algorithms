def longestConsecutive(nums):
    longest = 0
    num_dict = {}
    for num in nums:
        num_dict[num] = "아무거나"
    for num in num_dict:
        if num - 1 not in num_dict:
            count = 1
            target = num + 1
            while target in num_dict:
                count += 1
                target += 1
            longest = max(longest, count)
    return longest


result = longestConsecutive([6, 7, 100, 5, 4, 4])
print(result)
