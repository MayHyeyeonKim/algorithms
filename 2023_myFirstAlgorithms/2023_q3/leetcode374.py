# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:


class Solution:
    def guessNumber(self, n: int) -> int:
        l, r = 1, n
        while True:
            mid = (l + r) // 2
            res = guess(mid)
            if res > 0:
                l = mid + 1
            elif res < 0:
                r = mid - 1
            else:
                return mid


# # 예시용 guess 함수
# def guess(num):
#     # 숨겨진 숫자와 비교하여 결과를 반환
#     # 예시로 숨겨진 숫자가 6일 때, 예상 추측 값을 6과 비교합니다.
#     if num == 6:
#         return 0  # 정답을 찾음
#     elif num < 6:
#         return 1  # 예상 추측 값이 숨겨진 숫자보다 작음
#     else:
#         return -1  # 예상 추측 값이 숨겨진 숫자보다 큼


# def guessNumber(n):
#     left, right = 1, n
#     while left <= right:
#         mid = left + (right - left) // 2
#         result = guess(mid)
#         if result == 0:
#             return mid
#         elif result == 1:
#             left = mid + 1
#         else:
#             right = mid - 1


# # guessNumber 함수 호출
# result = guessNumber(10)  # 예시로 숨겨진 숫자를 10으로 가정
# print(result)
