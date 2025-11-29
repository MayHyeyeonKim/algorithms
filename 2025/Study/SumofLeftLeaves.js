// 404. Sum of Left Leaves

const TreeNode = (val, left, right) => {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
};

const SumOfLeftLeaves = (root) => {
  let sum = 0;

  const dfs = (root, isLeft) => {
    if (!root) return;

    if (!root.left && !root.right && isLeft) {
      sum += root.val;
    }
    dfs(root.left, true);
    dfs(root.right, false);
  };
  dfs(root, false);
  return sum;
};

root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(SumOfLeftLeaves(root)); // 24
