package Grind75;

import java.util.Stack;

public class ValidParentheses {
    public static void main(String[] args) {
        ValidParentheses solution = new ValidParentheses();
        String s = "{}[]()";
        System.out.println(solution.isValid(s));
    }
    public boolean isValid(String s){
        Stack<Character> stack = new Stack<Character>();

        for(char c : s.toCharArray()){
            if(c == '('){
                stack.push(')');
            }
            else if(c == '{'){
                stack.push('}');
            }
            else if(c == '['){
                stack.push(']');
            }
            else if(stack.isEmpty() || stack.pop() != c){
                return false;
            }
        }
        return stack.isEmpty();
    }
}

