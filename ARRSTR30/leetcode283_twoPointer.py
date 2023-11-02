
def moveZeroes(self, nums: List[int]) -> None:
    """
    Do not return anything, modify nums in-place instead.
    """
    # two pointer
    # ⬇
    #    ⬇️
    # [0,1,0,3,12]
    comparing = 0
    for i in range(len(nums)):
        if nums[i] != 0 and nums[comparing] == 0:
            nums[i], nums[comparing] = nums[comparing], nums[i]
        if nums[comparing] != 0:
            comparing += 1