package Grind75.java;

public class LCABST_1 {
    /**
     * Definition for a binary tree node.
     */
    static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode(int x) {
            val = x;
        }
    }

    static class Solution {
        public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
            TreeNode cur = root;
            while (cur != null) {
                if (p.val > cur.val && q.val > cur.val) {
                    cur = cur.right;
                } else if (p.val < cur.val && q.val < cur.val) {
                    cur = cur.left;
                } else {
                    return cur;
                }
            }
            return null;
        }
    }

    public static void main(String[] args) {
        // 예시 이진 검색 트리 생성
        //        5
        //       / \
        //      3   6
        //     / \   \
        //    2   4   7
        TreeNode root = new TreeNode(5);
        root.left = new TreeNode(3);
        root.right = new TreeNode(6);
        root.left.left = new TreeNode(2);
        root.left.right = new TreeNode(4);
        root.right.right = new TreeNode(7);

        // Solution 객체 생성
        Solution solution = new Solution();

        // LCA 찾기
        TreeNode pNode = root.left.left;   // 노드 값이 2인 노드
        TreeNode qNode = root.left.right;  // 노드 값이 4인 노드
        TreeNode lcaNode = solution.lowestCommonAncestor(root, pNode, qNode);

        // 결과 출력
        System.out.println("Lowest Common Ancestor: " + lcaNode.val);
    }
}
