def uniqueOccurences(arr):
    table = {}
    for i in range(len(arr)):
        if arr[i] in table:
            table[arr[i]] += 1
        else:
            table[arr[i]] = 1
    for i in table.values():
        return len(set(table.values())) == len(table.values())
    # 테이블의 중복되지 않은 값들의 합 == 테이블의 모든 값들이 같은지


arr = [1, 5, 1, 5, 3]
print(uniqueOccurences(arr))
