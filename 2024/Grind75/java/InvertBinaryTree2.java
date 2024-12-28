package Grind75.java;

public class InvertBinaryTree2 {
    public static void main(String[] args) {
        InvertBinaryTree2 solution = new InvertBinaryTree2();

        TreeNode one = new TreeNode(1);
        TreeNode three = new TreeNode(3);
        TreeNode two = new TreeNode(2, one, three);

        TreeNode six = new TreeNode(6);
        TreeNode nine = new TreeNode(9);
        TreeNode seven = new TreeNode(7, six, nine);

        TreeNode root = new TreeNode(4, two, seven);

        TreeNode invertedRoot = solution.invertTree2(root);

        // Print the inverted tree
        System.out.println("Inverted Tree:");
        printTree(invertedRoot);
    }

    // Utility method to print the binary tree (in-order traversal)
    private static void printTree(TreeNode root) {
        if (root != null) {
            printTree(root.left);
            System.out.print(root.val + " ");
            printTree(root.right);
        }
    }

    // Inner class representing the TreeNode
    static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode() {
        }

        TreeNode(int val) {
            this.val = val;
        }

        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    public TreeNode invertTree2(TreeNode root) {
        if (root == null) {
            return null;
        }

        // Swap left and right subtrees
        TreeNode temp = root.left;
        root.left = root.right;
        root.right = temp;

        // Recursively invert left and right subtrees
        invertTree2(root.left);
        invertTree2(root.right);

        return root;
    }
}
