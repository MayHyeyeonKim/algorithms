package Grind75;
import java.util.HashMap;
import java.util.Map;

public class TwoSum1_2_3 {

    // public int[] twoSum(int[] nums, int target) {
    //     int n = nums.length;
    //     for (int i = 0; i < n - 1; i++) {
    //         for (int j = i + 1; j < n; j++) {
    //             if (nums[i] + nums[j] == target) {
    //                 return new int[]{i, j};
    //             }
    //         }
    //     }
    //     return new int[]{}; // No solution found
    // }

    // public int[] twoSum(int[] nums, int target){
    //     Map<Integer, Integer> numMap = new HashMap<>();
    //     int n = nums.length;

    //     for(int i = 0; i < n; i++){
    //         numMap.put(nums[i],i);
    //     }

    //     for (int i = 0; i < n; i++) {
    //         int complement = target - nums[i];
    //         if(numMap.containsKey(complement) && numMap.get(complement) !=i){
    //             return new int[]{i, numMap.get(complement)};
    //         }
    //     }
    //     throw new IllegalArgumentException("No two sum solution");
    // }

    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numMap = new HashMap<>();
        int n = nums.length;

        for (int i = 0; i < n; i++) {
            int complement = target - nums[i];
            if (numMap.containsKey(complement)) {
                return new int[]{numMap.get(complement), i};
            }
            numMap.put(nums[i], i);
        }

        return new int[]{}; // No solution found
    }

        public static void main(String[] args) {
            TwoSum1_2_3 solution = new TwoSum1_2_3();
            int[] nums = {2,7,11,15};
            int target = 9;
            int[] result = solution.twoSum(nums, target);

            for(int i : result){
                System.out.print(i + " ");
            }
        }
}
