# sliding window


def findMaxAverage(nums, k):
    maxSum = sum(nums[:k])  # 처음에 maxSum변수에 배열nums의 k개 요소의 합을 저장함
    currentSum = maxSum  # 현재합계에 맥스합계를 복붙한다

    for i in range(k, len(nums)):
        # 첨에 문제 풀때 여기가 헷갈렸는데, k개 요소합이 적힌 부분 첫 시작부터 끝까지돌아보기 위한 반복문
        currentSum += nums[i] - nums[i - k]
        maxSum = max(maxSum, currentSum)
    return maxSum / k


# T.C : O(n) / S.C : O(1)
