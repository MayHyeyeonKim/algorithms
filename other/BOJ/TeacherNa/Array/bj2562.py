# 최댓값

#  9개의 수를 for문으로 입력받는 코드
numList = []
for i in range(9):
    numList.append(int(input()))

print(max(numList))
print(numList.index(max(numList)) + 1)

# for문을 list comprehension 으로 작성한 코드
numbers = [int(input()) for _ in range(9)]

print(max(numbers))
print(numbers.index(max(numbers)) + 1)
