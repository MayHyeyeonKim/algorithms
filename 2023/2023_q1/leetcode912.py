#소트는 nlogn
#타임리밋 나옴
#이게 퀵소트아냐?? 왜 chat cpt는 머지소트라는거야? 뭐가 맞는거야.. 

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