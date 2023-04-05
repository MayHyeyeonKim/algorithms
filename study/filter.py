#일반
def even(value):
    if value % 2 == 0:
        return True
    else:
        return False

print(even(3))
print(even(4))

#람다, 필터
print(list(filter(lambda x : x % 2 == 0, range(20))))

#리스트 컴프리헨션
print([i for i in range(20) if i % 2 == 0])

