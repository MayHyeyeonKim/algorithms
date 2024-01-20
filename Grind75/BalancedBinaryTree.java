package Grind75;

public class BalancedBinaryTree {
    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode(int x) {
            val = x;
        }
    }

    public boolean isBalanced(TreeNode root) {
        if (root == null) {
            return true;
        }

        int leftHeight = getHeight(root.left);
        int rightHeight = getHeight(root.right);

        // Check if the subtree heights differ by more than 1
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return false;
        }

        // Recursively check the left and right subtrees
        return isBalanced(root.left) && isBalanced(root.right);
    }

    private int getHeight(TreeNode node) {
        if (node == null) {
            return 0;
        }

        // Recursively calculate the height of the subtree
        int leftHeight = getHeight(node.left);
        int rightHeight = getHeight(node.right);

        // Return the height of the current node
        return 1 + Math.max(leftHeight, rightHeight);
    }

    public static void main(String[] args) {
        BalancedBinaryTree solution = new BalancedBinaryTree();

        // Example usage
        // Construct a balanced binary tree
        TreeNode root = solution.new TreeNode(3);
        root.left = solution.new TreeNode(9);
        root.right = solution.new TreeNode(20);
        root.right.left = solution.new TreeNode(15);
        root.right.right = solution.new TreeNode(7);

        // Check if the tree is balanced
        boolean result = solution.isBalanced(root);

        System.out.println("Is the tree balanced? " + result);
    }
}
