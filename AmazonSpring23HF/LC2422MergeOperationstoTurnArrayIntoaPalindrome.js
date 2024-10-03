/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    left = 0
    right = nums.length -1
    count = 0

    while (left < right){
        if (nums[left] == nums[right]){
            left +=1
            right -=1
        }
        else if (nums[left] < nums[right]){
            nums[left+1] += nums[left]
            left +=1
            count +=1
        }
        else{
            nums[right-1] += nums[right]
            right -=1
            count +=1
        }    
    }
    return count
};