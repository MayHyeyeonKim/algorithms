// 236. Lowest Common Ancestor of a Binary Tree

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const lowestCommonAncestor = (root, p, q) => {
  if (!root || root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) return root;
  return left || right;
};

// Example usage:
const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

const p = root.left; // Node with value 5
const q = root.right; // Node with value 1

const lca = lowestCommonAncestor(root, p, q);
console.log(lca.val); // Output: 3
