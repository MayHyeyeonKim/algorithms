// 94. Binary Tree Inorder Traversal

const inorderTraversal = function (root) {
  let result = [];
  function inorder(node) {
    if (!node) return;
    inorder(node.left);
    result.push(node.val);
    inorder(node.right);
  }
  inorder(root);
  return result;
};

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Test cases
const root1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.log(inorderTraversal(root1)); // [1,3,2]

const root2 = null;
console.log(inorderTraversal(root2)); // []

const root3 = new TreeNode(1);
console.log(inorderTraversal(root3)); // [1]

const root4 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
console.log(inorderTraversal(root4)); // [4,2,5,1,3]

const root5 = new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4));
console.log(inorderTraversal(root5)); // [1,2,3,4]
