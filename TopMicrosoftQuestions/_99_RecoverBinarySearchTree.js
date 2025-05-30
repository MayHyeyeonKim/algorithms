// 99. Recover Binary Search Tree
function recoverTree(root) {
  function inorder(node) {}
  inorder(root);
}

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(3);
root.left.right = new TreeNode(2);

recoverTree(root);
