// 1448. Count Good Nodes in Binary Tree
/**
DFS로 루트부터 탐색
현재까지 경로에서 가장 큰 값을 같이 들고 내려감 (maxSoFar)
현재 노드가 그보다 크거나 같으면 good node
왼쪽, 오른쪽 자식도 같은 방식으로 탐색
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  let count = 0;

  const dfs = (node, maxSoFar) => {
    if (!node) return;

    if (node.val >= maxSoFar) {
      count++;
      maxSoFar = node.val;
    }

    dfs(node.left, maxSoFar);
    dfs(node.right, maxSoFar);
  };

  dfs(root, root.val);
  return count;
};
