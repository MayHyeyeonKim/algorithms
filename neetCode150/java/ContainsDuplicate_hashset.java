package neetCode150.java;

import java.util.HashSet;

public class ContainsDuplicate_hashset {
    public boolean containsDuplicate_(int[] nums){
        HashSet<Integer> seen = new HashSet<>();
        for(int num:nums){
            if(seen.contains(num)){
                return true;
            }
            seen.add(num);
        }
        return false;
    }
    public static void main(String[] args) {
        ContainsDuplicate_hashset containsDuplicate_hashset = new ContainsDuplicate_hashset();
        int[] nums = {1,2,3,3,4,5,1};
        boolean result = containsDuplicate_hashset.containsDuplicate_(nums);
        System.out.println(result);
    }
}
