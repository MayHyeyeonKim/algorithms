J = "aA"
S = "aAAbbbb"

freqs = {}
count = 0

for char in S:
    if char not in freqs:
        freqs[char] = 1
    else:
        freqs[char] += 1


for char in J:
    if char in freqs:
        count += freqs[char]  # 그 char의 값에 접근해서 숫자를 count에 더함

# return 못씀 왜냐뮨 이건 function이 아니니까
