package Grind75.java;

import java.util.HashMap;
import java.util.Map;

public class ValidAnagram2 {
    public static void main(String[] args) {
        String s = "anagram";
        String t = "na";

        ValidAnagram2 validAnagram2 = new ValidAnagram2();
        boolean result = validAnagram2.isAnagram(s, t);
        System.out.println(result);
    }

    public boolean isAnagram(String s, String t){
        Map<Character, Integer> count = new HashMap<>();

        for(char x : s.toCharArray()){
            count.put(x, count.getOrDefault(x, 0)+1);
        }

        for(char x : t.toCharArray()){
            count.put(x, count.getOrDefault(x, 0)-1);
        }

        for(int val : count.values()){ //맵에 저장된 모든 값들을 가져 옴
            if(val != 0){
                return false;
            }
        }
        return true;
    }
}
