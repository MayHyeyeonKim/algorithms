package neetCode150.java;

import java.util.Arrays;

public class TwoSum_BruteForce {
    public int[] twoSum(int[] nums, int target) {
        //BruteForce
        int n = nums.length;
        for(int i=0; i<n-1; i++){
            for(int j= i+1; j<n; j++){
                if(nums[i]+nums[j] == target){
                    return new int[]{i,j};
                }
            }
        }
        return new int[]{};
    }
    public static void main(String[] args) {
        TwoSum_BruteForce twoSum_BruteForce = new TwoSum_BruteForce();
        int[] nums = {1,2,3,4,5};
        int target = 8;
        int[] result = twoSum_BruteForce.twoSum(nums,target);
        System.out.println(Arrays.toString(result));
    }
}
