package Grind75;

import java.util.HashMap;

public class RansomNote {
    static class Solution {
        public boolean canConstruct(String ransomNote, String magazine) {
            HashMap<Character, Integer> magazineFreq = new HashMap<>();

            for (char c : magazine.toCharArray()) {
                magazineFreq.put(c, magazineFreq.getOrDefault(c, 0) + 1);
            }
            for (char c : ransomNote.toCharArray()) {
                if (!magazineFreq.containsKey(c) || magazineFreq.get(c) <= 0) {
                    return false;
                }
                magazineFreq.put(c, magazineFreq.get(c) - 1);
            }
            return true;
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Test case 1
        String ransomNote1 = "a";
        String magazine1 = "b";
        boolean result1 = solution.canConstruct(ransomNote1, magazine1);
        System.out.println("Test Case 1: " + result1);  // Output: false

        // Test case 2
        String ransomNote2 = "aa";
        String magazine2 = "ab";
        boolean result2 = solution.canConstruct(ransomNote2, magazine2);
        System.out.println("Test Case 2: " + result2);  // Output: false

        // Test case 3
        String ransomNote3 = "aa";
        String magazine3 = "aab";
        boolean result3 = solution.canConstruct(ransomNote3, magazine3);
        System.out.println("Test Case 3: " + result3);  // Output: true
    }
}
