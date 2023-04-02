#Quick Sort -> 소트는 nlogn

class Solution:
    def sortArray(self, nums) -> int:
        if len(nums) <= 1:
            return nums
        pivot = nums[len(nums)//2]
        left = []
        mid = []
        right = []
        for x in nums:
            if x < pivot:
                left.append(x)
            elif x > pivot:
                right.append(x)
            else:
                mid.append(x)
        return self.sortArray(left) + mid + self.sortArray(right)

nums = [1,2,5,3,7,0]
result = Solution()
answer = result.sortArray(nums)
print(answer)