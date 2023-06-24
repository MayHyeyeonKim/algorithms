class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        # 1. 소팅
        # 2. 끝에 두개 고르고
        # 3. (nums[-2]-1)*(nums[-1]-1)

        nums.sort()
        return (nums[-2] - 1) * (nums[-1] - 1)
