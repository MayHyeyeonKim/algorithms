package Grind75.java;

public class MaximumSubarray {
    public int maxSubArray(int[] nums) {
        int curSum = 0;
        int maxSum = Integer.MIN_VALUE;

        for (int num : nums) {
            curSum = Math.max(num, curSum + num);
            maxSum = Math.max(curSum, maxSum);
        }

        return maxSum;
    }

    public static void main(String[] args) {
        MaximumSubarray solution = new MaximumSubarray();
    
            // Example input
            int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    
            // Call maxSubArray method and print the result
            int result = solution.maxSubArray(nums);
            System.out.println("Maximum Subarray Sum: " + result);
    }
}
