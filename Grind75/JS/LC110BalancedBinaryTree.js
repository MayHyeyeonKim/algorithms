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
 * @return {boolean}
 */
var isBalanced = function(root) {
    function checkHeight(node) {
        if (node === null) return 0;
        
        let leftHeight = checkHeight(node.left);
        if (leftHeight === -1) return -1; // 왼쪽 하위 트리가 균형 잡히지 않으면 -1 반환
        
        let rightHeight = checkHeight(node.right);
        if (rightHeight === -1) return -1; // 오른쪽 하위 트리가 균형 잡히지 않으면 -1 반환
        
        if (Math.abs(leftHeight - rightHeight) > 1) return -1; // 현재 노드에서 불균형 발견 시 -1 반환
        
        return Math.max(leftHeight, rightHeight) + 1; // 현재 노드의 높이 반환
    }
    
    return checkHeight(root) !== -1;
};
