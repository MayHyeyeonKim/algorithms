// 543. Diameter of Binary Tree

const diameterOfBinaryTree = (root) => {
  let diameter = 0;

  const depth = (node) => {
    if (!node) return 0;
    const left = depth(node.left);
    const right = depth(node.right);
    diameter = Math.max(diameter, left + right);
    return Math.max(left, right) + 1;
  };

  depth(root);

  return diameter;
};

let root = [1, 2, 3, 4, 5];
let tree = {};

const buildTree = (arr, index = 0) => {
  if (index >= arr.length || arr[index] === null) return null;
  const node = { val: arr[index], left: null, right: null };
  node.left = buildTree(arr, 2 * index + 1);
  node.right = buildTree(arr, 2 * index + 2);
  return node;
};

root = buildTree(root);
console.log(diameterOfBinaryTree(root)); // Output: 3
