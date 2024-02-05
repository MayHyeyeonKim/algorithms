package neetCode150.java;

import java.util.HashMap;
import java.util.Map;

class  ValidAnagram {
    public boolean isAnagram(String s, String t) {
        Map<Character, Integer> count = new HashMap<>();

        for(char x : s.toCharArray()){
            count.put(x, count.getOrDefault(x,0)+1);
        }
        for(char x : t.toCharArray()){
            count.put(x, count.getOrDefault(x,0)-1);
        }
        for(int val : count.values()){
            if(val != 0){
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        ValidAnagram validAnagram = new ValidAnagram();
        String s = "anagram";
        String t = "nagaram";
        boolean result = validAnagram.isAnagram(s, t);

        if(result){
            System.out.println("It's anagrams!");
        } else {
            System.out.println("It is not anagrams!");
        }
    }
}