/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    function depth(node){
        if (node == null){
            return 0;
        }
        let leftDepth = depth(node.left)
        let rightDepth = depth(node.right)

        diameter = Math.max(diameter, leftDepth + rightDepth)

        return Math.max(leftDepth, rightDepth) + 1
    }
    depth(root);
    return diameter;
}