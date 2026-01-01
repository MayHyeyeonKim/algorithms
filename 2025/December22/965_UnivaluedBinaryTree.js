// 965. Univalued Binary Tree

function isUnivalTree(root) {
  const value = root.val;

  function dfs(node) {
    if (!node) return true;
    if (node.val !== value) return false;

    return dfs(node.left) && dfs(node.right);
  }

  return dfs(root);
}

// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

/**
Input: root = [1,1,1,1,1,null,1]
Output: true
 */

// Example usage:
const tree = new TreeNode(1, new TreeNode(1, new TreeNode(1), new TreeNode(1)), new TreeNode(1, null, new TreeNode(1)));

console.log(isUnivalTree(tree)); // Output: true

const tree2 = new TreeNode(
  2,
  new TreeNode(2, new TreeNode(5), new TreeNode(2)),
  new TreeNode(2, null, new TreeNode(2))
);

console.log(isUnivalTree(tree2)); // Output: false
