for i in range(1, 11):
    if i == 5:
        print("We found 5!")
        break
    print(i)
# 5를 찾고 break를 만나면 거기서 코드 끝!

for i in range(1, 11):
    if i == 5:
        print("We found 5!")
        continue
    print(i)
# 5를 찾고 continue를 만나서 아래 코드 실행!
