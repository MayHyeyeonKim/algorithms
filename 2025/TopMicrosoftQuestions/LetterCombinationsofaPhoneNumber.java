import java.util.*;

public class LetterCombinationsofaPhoneNumber {
    public List<String> letterCombinations(String digits) {
        if (digits == null || digits.length() == 0)
            return new ArrayList<>();

        Map<Character, String> map = new HashMap<>();
        map.put('2', "abc");
        map.put('3', "def");
        map.put('4', "ghi");
        map.put('5', "jkl");
        map.put('6', "mno");
        map.put('7', "pqrs");
        map.put('8', "tuv");
        map.put('9', "wxyz");

        List<String> res = new ArrayList<>();

        for (char digit : digits.toCharArray()) {
            String letters = map.get(digit);

            // 첫 번째 숫자일 때
            if (res.isEmpty()) {
                for (char c : letters.toCharArray()) {
                    res.add(String.valueOf(c));
                }
                continue;
            }

            // 이후 숫자들은 기존 조합에 붙이기
            List<String> temp = new ArrayList<>();
            for (String prefix : res) {
                for (char c : letters.toCharArray()) {
                    temp.add(prefix + c);
                }
            }
            res = temp; // 업데이트
        }

        return res;
    }

    public static void main(String[] args) {
        LetterCombinationsofaPhoneNumber plc = new LetterCombinationsofaPhoneNumber();
        System.out.println(plc.letterCombinations("23"));
    }
}
