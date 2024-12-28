package neetCode150.java;

import java.util.Arrays;

public class ContainsDuplicate_sort {
    public boolean containsDuplicate_(int[] nums){
        Arrays.sort(nums);
        int n = nums.length;
        for(int i = 1; i < n; i++){
            if(nums[i] == nums[i-1]){
                return true;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        ContainsDuplicate_sort containsDuplicate = new ContainsDuplicate_sort();
        int[] nums = {1,2,1,2,4,5,6};
        boolean result = containsDuplicate.containsDuplicate_(nums);
        System.out.println(result);
    }
}



