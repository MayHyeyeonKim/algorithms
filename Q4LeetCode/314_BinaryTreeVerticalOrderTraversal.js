// 314. Binary Tree Vertical Order Traversal

const verticalOrder = (root) => {
  const colMap = new Map();
  const queue = [[root, 0]];
  let minCol = 0;
  let maxCol = 0;

  while (queue.length) {
    const [node, col] = queue.shift();

    if (!colMap.has(col)) {
      colMap.set(col, []);
    }
    colMap.get(col).push(node.val);

    if (node.left) {
      queue.push([node.left, col - 1]);
      minCol = Math.min(minCol, col - 1);
    }

    if (node.right) {
      queue.push([node.right, col + 1]);
      maxCol = Math.max(maxCol, col + 1);
    }
  }

  const result = [];
  for (let i = minCol; i <= maxCol; i++) {
    result.push(colMap.get(i) || []);
  }
  return result;
};

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(verticalOrder(root)); // Output: [[9],[3,15],[20],[7]]
