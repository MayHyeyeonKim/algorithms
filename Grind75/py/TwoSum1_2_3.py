class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i+1,len(nums)):
                if nums[i] + nums[j] == target:
                    return [i,j]


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # {
        #     7:0,
        #     2:1,
        #     -3:2,
        #     -6:3
        # }
        dict ={}
        for i, n in enumerate(nums):
            if nums[i] in dict:
                return dict[n], i # dict[n] + i = target
            else: #dict에 넣는 부분
                dict[target-n] = i
        # print(dict)



class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        nums = list(enumerate(nums))
        nums.sort(key=lambda x:x[1])
        left,right = 0,len(nums)-1
        while left < right:
            if nums[left][1] + nums[right][1] == target:
                return [nums[left][0], nums[right][0]]
            elif nums[left][1] + nums[right][1] < target:
                left += 1
            else:
                right -=1
            