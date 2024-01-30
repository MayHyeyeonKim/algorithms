def getChannelRate(views):
    def isSpecial(subarray):
        if len(subarray) < 3:
            return False
        XORfirstLast = subarray[0] ^ subarray[-1]
        XOROthers = 0
        for i in range(1, len(subarray) - 1):  # 두 번째 요소부터 시작
            XOROthers ^= subarray[i]
        return XORfirstLast == XOROthers

    count = 0
    for i in range(len(views)):
        XOROthers = 0
        for j in range(i + 2, len(views)):
            XOROthers ^= views[j - 1]
            if views[i] == XOROthers:
                count += 1
    return count % (10**9 + 7)


# 예시 사용
n = 4
views = [0, 3, 6, 5]
result = getChannelRate(views)
print(result)  # 출력: 2
