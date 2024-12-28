package Grind75;

public class FirstBadVersion {
    public class VersionControl {
        private int badVersion;

        public VersionControl(int badVersion) {
            this.badVersion = badVersion;
        }

        public boolean isBadVersion(int version) {
            return version >= badVersion;
        }
    }

    class Solution extends VersionControl {
        public Solution(int badVersion) {
            super(badVersion);
        }

        public int firstBadVersion(int n) {
            int left = 1;
            int right = n;

            while (left < right) {
                int mid = left + (right - left) / 2;

                if (isBadVersion(mid)) {
                    right = mid;
                } else {
                    left = mid + 1;
                }
            }
            return left;
        }
    }

    public static void main(String[] args) {
        // Create an instance of Solution with a known bad version
        FirstBadVersion.Solution solution = new FirstBadVersion().new Solution(5);

        // Test the firstBadVersion method
        int result = solution.firstBadVersion(10);

        System.out.println("The first bad version is: " + result);
    }
}
