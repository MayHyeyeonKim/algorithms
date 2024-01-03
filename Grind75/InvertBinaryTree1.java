//need to fix it little bit

package Grind75;

public class InvertBinaryTree1 {
    public static void main(String[] args) {
        // Create a sample binary tree for testing
        TreeNode root = new TreeNode(4);
        root.left = new TreeNode(2);
        root.right = new TreeNode(7);
        root.left.left = new TreeNode(1);
        root.left.right = new TreeNode(3);

        // Print the original tree
        System.out.println("Original Tree:");
        printTree(root);

        // Invert the binary tree
        InvertBinaryTree1 solution = new InvertBinaryTree1();
        TreeNode invertedRoot = solution.invertTree1(root);

        // Print the inverted tree
        System.out.println("\nInverted Tree:");
        printTree(invertedRoot);
    }

    // Utility method to print the binary tree (in-order traversal)
    private static void printTree(TreeNode root) {
        if (root != null) {
            System.out.print(root.val + " ");
            printTree(root.left);
            printTree(root.right);
        }
    }

    // Inner class representing the TreeNode
    static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode() {}
        TreeNode(int val) { this.val = val; }
        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    public TreeNode invertTree1(TreeNode root) {
        if (root == null) {
            return null;
        }

        TreeNode temp = root.left;
        root.left = root.right;
        root.right = temp;

        invertTree1(root.left);
        invertTree1(root.right);

        return root;
    }
}
