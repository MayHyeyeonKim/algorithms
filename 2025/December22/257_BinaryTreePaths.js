// 257. Binary Tree Paths

function binaryTreePaths(root) {
  const result = [];

  function dfs(node, path) {
    if (!node) return;

    path += node.val;

    if (!node.left && !node.right) {
      result.push(path);
      return;
    }

    dfs(node.left, path + "->");
    dfs(node.right, path + "->");
  }

  dfs(root, "");
  return result;
}

// Example usage:
const tree = {
  val: 1,
  left: {
    val: 2,
    right: {
      val: 5,
    },
  },
  right: {
    val: 3,
  },
};

console.log(binaryTreePaths(tree)); // Output: ["1->2->5", "1->3"]
