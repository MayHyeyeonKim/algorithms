// 897. Increasing Order Search Tree

function increasingBST(root) {
  let dummy = new TreeNode(0);
  let current = dummy;

  function inorder(node) {
    if (!node) return;

    inorder(node.left);

    // 원래 노드를 재사용: 왼쪽 자식 제거 후 연결
    node.left = null;
    current.right = node;
    current = current.right;

    inorder(node.right);
  }

  inorder(root);
  return dummy.right;
}

// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

/**
Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
 */

// Example usage:
const tree = new TreeNode(
  5,
  new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)),
  new TreeNode(6, null, new TreeNode(8, new TreeNode(7), new TreeNode(9)))
);

const newTree = increasingBST(tree);

// Function to print the right-skewed tree
function printRightSkewedTree(node) {
  const result = [];
  while (node) {
    result.push(node.val);
    node = node.right;
  }
  console.log(result);
}

printRightSkewedTree(newTree); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
