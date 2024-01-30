class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        nums1[m:] = nums2  # nums1 배열의 뒷부분에 nums2 배열을 확장한 후
        nums1.sort()


# 깊은복사는 원본에 영향을 미치지 않는다
# 예시1
# nums1 = [3, 1, 2]
# sorted_nums = sorted(nums1)
# print(nums1)       # 출력: [3, 1, 2] (원래 리스트는 변경되지 않음)
# print(sorted_nums) # 출력: [1, 2, 3] (새로운 정렬된 리스트)
# 예시2
# original = [1, 2, 3]
# copy = original.copy()

# copy[0] = 10

# print(original)  # 출력: [1, 2, 3] (원본은 변경되지 않음)
# print(copy)      # 출력: [10, 2, 3] (복사본은 수정됨)


# 얕은복사는 원본에 영향을 줄 수 있다
# nums1 = [3, 1, 2]
# nums1.sort()
# print(nums1)  # 출력: [1, 2, 3]
