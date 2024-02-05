# def two_sum(nums,target):
#     dict = {}
#     for v in nums:
#         dict[v] = '아무거나'
    
#     for v in nums:
#         needed_num = target - v
#         if needed_num in dict:
#         # if needed_num in nums로 찾지 않은 이유: nums를 다 돌면 n이 되고, n을 for v in nums로 n번 돌면 n제곱이 되니 시간복잡도 나빠지니 (dict을 돌면 O(1)이니까)
#             return v,needed_num
#     return False

# # two_sum([4,5,6,7,8], 12)
# result = two_sum([4,5,6,7,8], 13)
# print(result)

# 근데 이렇게 짜면 nums중에 숫자가 중복될 수 있으니 잘못된 거니, 다시 생각해봐야 해... ㅠㅠ

def two_sum(nums, target):
    dict = {}
    for i, num in enumerate(nums):
        dict[num] = i
    for i, num in enumerate(nums):
        if target - num in dict and i != dict[target-num]:
            return i, dict[target-num]
    

result = two_sum([4,5,6,7,8], 13)
print(result)