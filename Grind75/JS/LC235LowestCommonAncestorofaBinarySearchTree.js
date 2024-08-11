/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    while(root){
        if(root.val < p.val && root.val < q.val){
            root = root.right
        }
        else if (root.val > p.val && root.val > q.val){
            root = root.left
        } else {
            break;
        }
    }
    return root;
};


// else break가 없는 경우: 
// 루프가 계속 진행됩니다. 
// 이 경우, 트리가 더 이상 탐색할 수 있는 노드가 없을 때까지 계속 이동하게 됩니다. 
// 결과적으로, 루프가 불필요하게 더 많은 노드를 탐색하게 되거나, 실제 최소 공통 조상이 아닌 다른 노드가 반환될 가능성이 있습니다.