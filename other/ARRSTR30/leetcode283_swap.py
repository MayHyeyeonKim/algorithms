def moveZeroes(nums):
    # nums.sort()

    # for i in range(len(nums))
    # len(nums) | nums[i] | val
    #  1st      |nums[0]  | 0
    #  2nd      |nums[1]  | 0
    #  3rd      |nums[2]  | 1
    #  4th      |nums[3]  | 3
    #  5th      |nums[4]  | 12

    #     currentIdx = 0 <- initiate currentIdx
    # 1. swap the positions of nonZeroNums to move'em in front of zeros.
    #     [0,0,1,3,12] -> [1,0,0,3,12] nums[currentIdx],nums[i] = nums[i],nums[currentIdx]
    #         currentIdx += 1 //1
    #     [1,0,0,3,12] -> [1,3,0,0,12]
    #         currentIdx += 1 //2
    #     [1,3,0,0,12] -> [1,3,12,0,0]
    #         currentIdx += 1 //3
    #     [1,3,12,0,0]
    #        forloop stop! -> no return anything   

    # * edge case
    #  [1,2]
    nums.sort()
    idx = 0
    for i in range(len(nums)):
        if nums[i] != 0:
            nums[idx],nums[i] = nums[i],nums[idx]
            idx += 1

nums = [1,2,0,5,4,0]
ans = moveZeroes(nums)
print(nums)