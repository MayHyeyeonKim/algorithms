package Grind75;

public class BinarySearch {
    public static void main(String[] args) {
        // Example usage
        int[] nums = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        int target = 5;

        BinarySearch binarySearch = new BinarySearch();
        int result = binarySearch.search(nums, target);

        if (result != -1) {
            System.out.println("Target found at index: " + result);
        } else {
            System.out.println("Target not found in the array.");
        }
    }

    public int search(int[] nums, int target) {
        return binary(nums, target, 0, nums.length - 1);
    }

    public int binary(int[] a, int x, int s, int e) {
        while (s <= e) {
            int m = s + (e - s) / 2;
            if (a[m] == x) {
                return m;
            }
            if (x < a[m]) {
                e = m - 1;
            } else {
                s = m + 1;
            }
        }
        return -1;
    }
}
