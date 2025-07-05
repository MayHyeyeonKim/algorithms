import java.util.*;

public class _IntegertoEnglishWords {
    private final String[] BELOW_20 = {
            "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
            "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
    };
    private final String[] TENS = {
            "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    };
    private final String[] THOUSANDS = {
            "", "Thousand", "Million", "Billion"
    };

    public String numberToWords(int num) {
        if (num == 0)
            return "Zero";

        String result = "";
        int i = 0;

        while (num > 0) {
            int chunk = num % 1000;
            if (chunk != 0) {
                result = helper(chunk).trim() + " " + THOUSANDS[i] + " " + result;
            }
            num /= 1000;
            i++;
        }
        return result.trim().replace(" +", " ");
    }

    private String helper(int num) {
        if (num == 0)
            return "";
        else if (num < 20)
            return BELOW_20[num] + " ";
        else if (num < 100)
            return TENS[num / 10] + " " + helper(num % 10);
        else
            return BELOW_20[num / 100] + " Hundred " + helper(num % 100);
    }

    public static void main(String[] args) {
        _IntegertoEnglishWords ItEW = new _IntegertoEnglishWords();

        int test1 = 123;
        int test2 = 12345;
        int test3 = 1234567;
        int test4 = 0;

        System.out.println(test1 + " -> " + ItEW.numberToWords(test1));
        System.out.println(test2 + " -> " + ItEW.numberToWords(test2));
        System.out.println(test3 + " -> " + ItEW.numberToWords(test3));
        System.out.println(test4 + " -> " + ItEW.numberToWords(test4));

    }
}
