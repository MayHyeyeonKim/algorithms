package Grind75;

import java.util.Arrays;

public class ValidAnagram {
    public static void main(String[] args) {
        String s = "anagram";
        String t = "nagarma";

        ValidAnagram validAnagram = new ValidAnagram();
        boolean result = validAnagram.isAnagram(s, t);
        System.out.println(result);
    }

    public boolean isAnagram(String s, String t){
        char[] charArrayS = s.toCharArray();
        char[] charArrayT = t.toCharArray();

        Arrays.sort(charArrayS);
        Arrays.sort(charArrayT);
        return Arrays.equals(charArrayS, charArrayT);
    }
}

// 일단, 스트링 불변데이타이니 우선 조작을 위해 가변한 데이타 문자열로 변환해준 뒤
// 문자열로 변환 된 이 두 데이타를 알파벳순으로 정렬후 그 결과가 같은지 비교해서 true or false로 반환해준다.
// �
// TC = O(nlogn) 소팅이기 때문에
// SC = O(1) 인풋이외에 또다른 extra space 사용하지 않아서