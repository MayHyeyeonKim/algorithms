# 2405. Optimal Partition of String
# Optimal Partition of String 문제는 문자열이 주어졌을 때, 이 문자열을 겹치지 않는 부분 문자열로 나누고 싶다. 각 문자열이 중복되면 안된다. 가능한 한 가장 적은 부분으로 나눠야 한다.
# abac일 때 ab, ac로 나눠야 함

# 문제 해결 순서 (수도코드)
# 1. 문자열을 하나씩 읽어온다
# 2. 새로운 부분 문자열을 시작할 때, 이미 등장한 문자를 기억한다.
# 3. 만약 이미 등장한 문자가 다시 나오면, 새로운 부분 문자열을 시작한다.
# 4. 문자열을 끝까지 읽은 후, 최소 몇 개의 부분 문자열로 나눴는지 계산한다.

# 1. count = 1  (부분 문자열의 개수를 세는 변수, 최소 하나는 필요하니까), 카운트를 올리는 조건은 이미 집합에 있는 문자가 다시 나올 때(즉 중복이 있을 때)
# 2. 이미 나온 문자를 저장할 빈 집합을 만든다.
# 3. 문자열의 각 문자를 하나씩 확인한다. 
#     - 만약 문자가 집합에 없다면 집합에 추가한다
#     - 만약 문자가 이미 집합에 있다면, 부분 문자열을 하나 끝내고 새로운 부분을 시작한다. 새 집합을 만들고 그 문자를 집합에 넣는다.
# 4. 문자열이 끝나면 부분 문자열의 개수 count 반환한다.


# s = "abacaba" -> a b ca ba 이렇게 나와야겠네

def optimalPartition(s):
    count = 1
    seen = set()

    for char in s:
        if char in seen:
            count += 1
            seen.clear()
        seen.add(char)
    return count

s = "abacaba"
result = optimalPartition(s)
print(s)