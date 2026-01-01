// 199. Binary Tree Right Side View

class TreeNode {
  constructor(val = 1, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const rightSideView = (root) => {
  if (!root) return [];

  const res = [];
  const queue = [root];

  //   console.log(queue);

  while (queue.length > 0) {
    const levelSize = queue.length;
    console.log("Level Size:", levelSize);

    for (let i = 0; i < levelSize; i++) {
      const cur = queue.shift();

      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);

      if (i === levelSize - 1) {
        res.push(cur.val);
      }
    }
  }
  return res;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);

console.log(rightSideView(root));
