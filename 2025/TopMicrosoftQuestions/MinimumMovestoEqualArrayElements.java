
// 453. Minimum Moves to Equal Array Elements
import java.util.Arrays;

// public class MinimumMovestoEqualArrayElements {
// public int minMoves(int[] nums) {
// Arrays.sort(nums);
// int res = 0;
// int min = nums[0];
// for (int i = nums.length - 1; i >= 0; i--) {
// res += nums[i] - min;
// }
// return res;
// }

// public static void main(String[] args) {
// MinimumMovestoEqualArrayElements sol = new
// MinimumMovestoEqualArrayElements();
// System.out.println(sol.minMoves(new int[] { 1, 2, 3 }));
// }
// }

public class MinimumMovestoEqualArrayElements {
    public int minMoves(int[] nums) {
        int min = Integer.MAX_VALUE;
        int sum = 0;
        for (int num : nums) {
            min = Math.min(min, num);
            sum += num;
        }
        return sum - min * nums.length;
    }

    public static void main(String[] args) {
        MinimumMovestoEqualArrayElements sol = new MinimumMovestoEqualArrayElements();
        System.out.println(sol.minMoves(new int[] { 1, 2, 3 }));
    }
}
// The above code calculates the minimum number of moves required to make all
// elements in the array equal.