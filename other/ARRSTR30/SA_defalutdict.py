from collections import defaultdict


def channelRating(arr):
    currxor = 0
    prev = defaultdict(lambda: 0)
    res = 0
    add_queue = [0]  # makes sure subarray is of length 3

    for ind in range(len(arr)):
        i = arr[ind]
        currxor = currxor ^ i

        if currxor in prev:
            res += prev[currxor]

        if ind > 0:
            prev[add_queue[0]] += 1
            add_queue.pop(0)
        add_queue.append(currxor)

    return res


# 테스트
print(channelRating([0, 3, 6, 5]))  # 출력: 2
print(channelRating([0, 0, 3, 6, 5]))  # 출력: 3
print(channelRating([0, 8, 8]))  # 출력: 1
