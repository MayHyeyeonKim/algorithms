public class leetcode283_MoveZeroes1 {
    public static void main(String[] args) {
        Solution solution = new Solution();

        // 예시 배열
        int[] nums1 = {0, 1, 0, 3, 12};
        System.out.print("Original Array: ");
        printArray(nums1);

        // 배열 조작
        solution.moveZeroes(nums1);

        // 조작 후 배열 출력
        System.out.print("Modified Array: ");
        printArray(nums1);
    }

    // 배열 출력을 위한 유틸리티 메서드
    private static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}

class Solution {
    public void moveZeroes(int[] nums) {
        if (nums.length == 1) {
            return;
        }

        int nonZeroIndex = 0;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                nums[nonZeroIndex] = nums[i];
                nonZeroIndex++;
            }
        }

        while (nonZeroIndex < nums.length) {
            nums[nonZeroIndex] = 0;
            nonZeroIndex++;
        }
    }
}

