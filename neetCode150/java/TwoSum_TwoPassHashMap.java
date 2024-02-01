package neetCode150.java;

import java.util.HashMap;
import java.util.Map;

public class TwoSum_TwoPassHashMap {
    public int[] twoSum(int[] nums, int target) {
        //Two-pass HashTable
        Map<Integer, Integer> numMap = new HashMap<>();
        int n = nums.length;

        for(int i=0; i<n; i++){
            numMap.put(nums[i],i);
        }
        for(int i=0; i<n; i++){
            int complement = target-nums[i];
            if(numMap.containsKey(complement) && numMap.get(complement) != i){ //현재 보수가 맵에 존재하냐 & 현재의보수 인덱스가 서로 다르냐
                return new int[]{i, numMap.get(complement)};
            }
        }
        return new int[]{};
    }

        public static void main(String[] args) {
            TwoSum_TwoPassHashMap twoSum_TwoPassHashMap = new TwoSum_TwoPassHashMap();
            
            int[] nums = {2, 7, 11, 15};
            int target = 9;
    
            int[] result = twoSum_TwoPassHashMap.twoSum(nums, target);
    
            // 결과 출력
            if (result.length == 2) {
                System.out.println("Indices: [" + result[0] + ", " + result[1] + "]");
            } else {
                System.out.println("No solution found.");
            }
        }
    }