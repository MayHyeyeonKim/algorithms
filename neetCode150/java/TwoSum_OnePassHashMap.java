package neetCode150.java;

import java.util.HashMap;
import java.util.Map;

public class TwoSum_OnePassHashMap {
    public int[] twoSum(int[] nums, int target) {
        //OnePass HashTable
        Map<Integer,Integer> numMap = new HashMap<>();
        int n = nums.length;

        for(int i = 0; i < n; i++){
            int complement = target - nums[i];
            if(numMap.containsKey(complement)){
                return new int[]{numMap.get(complement),i};
            }
            numMap.put(nums[i],i);
        }
        return new int[]{};
    }
    public static void main(String[] args) {
        TwoSum_OnePassHashMap solution = new TwoSum_OnePassHashMap();
        
        int[] nums = {2, 7, 11, 15};
        int target = 9;

        int[] result = solution.twoSum(nums, target);

        // 결과 출력
        if (result.length == 2) {
            System.out.println("Indices: [" + result[0] + ", " + result[1] + "]");
        } else {
            System.out.println("No solution found.");
        }
    }
}
