import java.util.Stack;

public class DecodeString {
    public String decodeString(String s) {
        Stack<Integer> countStack = new Stack<>(); // 반복 횟수 k를 저장할 스택 (예: 3[a2[c]] → 3, 2 이런 숫자들)
        Stack<StringBuilder> stringStack = new Stack<>(); // 이건 [를 만났을 때까지 만든 문자열을 임시로 저장하는 스택
        StringBuilder current = new StringBuilder(); // 지금 만들고 있는 결과 문자열
        int k = 0; // 숫자를 누적해서 담을 임시 변수

        for (char ch : s.toCharArray()) {
            if (Character.isDigit(ch)) {
                k = k * 10 + (ch - '0');
            } else if (ch == '[') {
                countStack.push(k);
                stringStack.push(current);
                current = new StringBuilder();
                k = 0;
            } else if (ch == ']') {
                int repeat = countStack.pop();
                StringBuilder prev = stringStack.pop();
                for (int i = 0; i < repeat; i++) {
                    prev.append(current);
                }
                current = prev;
            } else {
                current.append(ch);
            }
        }
        return current.toString();
    }

    public static void main(String[] args) {
        DecodeString ds = new DecodeString();
        String res = ds.decodeString("3[a2[c]]");
        System.out.println(res);
    }
}
