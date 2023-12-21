public class leetcode125_ValidPalindrome {
    public boolean isPalindrome(String s) {
        if (s.isEmpty()) {
            return true;
        }
        int start = 0;
        int last = s.length() - 1;
        while(start <= last) {
            char currFirst = s.charAt(start);
            char currLast = s.charAt(last);
            if (!Character.isLetterOrDigit(currFirst)) {
                start++;
            } else if(!Character.isLetterOrDigit(currLast)) {
                last--;
            } else {
                if (Character.toLowerCase(currFirst) != Character.toLowerCase(currLast)) {
                    return false;
                }
                start++;
                last--;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        leetcode125_ValidPalindrome solution = new leetcode125_ValidPalindrome();

        // 예시 테스트
        String example1 = "A man, a plan, a canal: Panama";
        System.out.println("Is \"" + example1 + "\" a palindrome? " + "-> " + solution.isPalindrome(example1));

        String example2 = "race a car";
        System.out.println("Is \"" + example2 + "\" a palindrome? " +  "-> " + solution.isPalindrome(example2));
    }

}
