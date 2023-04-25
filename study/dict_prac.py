def two_sum(nums, target):
    memo = {}
    for i, num in enumerate(nums): #for 인덱스,시퀀스자료형 in enumerate(시퀀스자료형)이렇게 사용, enumerate: 낱낱이 세다. / 튜플로 반환
        memo[num] = i
    for i in nums:
        wanna = target - num
        if wanna in memo and wanna != memo[target-num]:  #wanna가 딕셔너리애 있다. 그리고 그 wanna가 지금 현재 i의 key와 같으면 안된다.
            return wanna
test1 = two_sum([2,3,4,6],8)
print(test1)

# score = {
#     'Korean' : 97,
#     'Eng' : 100,
#     'Math' : 90
# }
# print(score)

# score['Sci'] = 90 #새로운 키와 값추가할 때
# score['Math'] = 92 #기존의 값 바꿀 때

# print(score)
# print('Sci' in score) #True
# print('Music' in score) #False

# #score['Music']가 있으면 score['Music']와 값을 출력해주고, 없으면 score['Music']와 값을 추가해줘.
# if 'Music' in score:
#     print(score['Music'])
# else:
#     score['Music'] = 70
# print(score)

