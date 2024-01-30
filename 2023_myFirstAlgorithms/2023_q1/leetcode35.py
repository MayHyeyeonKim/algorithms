class Solution:
    def searchInsertPosition(self, nums, target: int) -> int:
        left, right = 0, len(nums)-1
        while left <= right:
            mid = (left + right) //2
            if nums[mid] < target:
                left = mid + 1
            elif nums[mid] > target:
                right = mid -1
            else:
                return mid
        return left

result = Solution()
answer = result.searchInsertPosition([1,3,5,6], 2)
print(answer)