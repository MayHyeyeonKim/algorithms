// 224. Basic Calculator

import java.util.Stack;

public class BasicCalculator {
    public int calculate(String s) {
        Stack<Integer> stack = new Stack<>();
        int result = 0;
        int number = 0;
        int sign = 1; // 현재 부호 (1이면 +, -1이면 -)

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);

            if (Character.isDigit(ch)) {
                number = number * 10 + (ch - '0'); // 여러 자리 숫자 처리
            } else if (ch == '+') {
                result += sign * number;
                number = 0;
                sign = 1;
            } else if (ch == '-') {
                result += sign * number;
                number = 0;
                sign = -1;
            } else if (ch == '(') {
                // 괄호 안 계산을 위해 현재 result와 sign 저장
                stack.push(result);
                stack.push(sign);
                result = 0;
                sign = 1;
            } else if (ch == ')') {
                result += sign * number;
                number = 0;
                result *= stack.pop(); // 괄호 앞의 부호
                result += stack.pop(); // 괄호 앞의 계산 결과
            }
            // 공백은 무시
        }

        // 남은 숫자 반영
        if (number != 0) {
            result += sign * number;
        }

        return result;
    }

    public static void main(String[] args) {
        BasicCalculator calc = new BasicCalculator();
        String input = "(1+(4+5+2)-3)+(6+8)";
        System.out.println("Result: " + calc.calculate(input)); // 출력: 23
    }
}
