// 257. Binary Tree Paths

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function binaryTreePaths(root) {
  const result = [];

  function dfs(node, path) {
    if (!node) return;

    // 현재 노드의 값을 경로에 추가
    const newPath = path ? `${path}->${node.val}` : `${node.val}`;

    // 리프 노드인 경우 결과에 경로 추가
    if (!node.left && !node.right) {
      result.push(newPath);
      return;
    }

    // 왼쪽과 오른쪽 자식 노드로 재귀 호출
    dfs(node.left, newPath);
    dfs(node.right, newPath);
  }

  dfs(root, "");
  return result;
}

console.log(binaryTreePaths([1, 2, 3, null, 5])); // ["1->2->5", "1->3"]
