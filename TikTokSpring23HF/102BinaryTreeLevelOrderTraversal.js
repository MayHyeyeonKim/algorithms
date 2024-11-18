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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []; // 트리가 비어있으면 빈 배열 반환

  const result = []; // 결과를 저장할 배열
  const queue = [root]; // 첫 번째 층(루트)을 큐에 넣음

  while (queue.length > 0) {
    const level = []; // 현재 층의 숫자를 저장할 배열
    const size = queue.length; // 현재 층에 있는 노드의 개수

    for (let i = 0; i < size; i++) {
      const node = queue.shift(); // 큐에서 노드를 꺼냄
      level.push(node.val); // 현재 층 배열에 값 추가

      // 자식 노드를 큐에 추가
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level); // 현재 층 결과를 전체 결과에 추가
  }

  return result; // 최종 결과 반환
};

// 트리 예시: [3,9,20,null,null,15,7]
const root = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
};

console.log(levelOrder(root)); // 출력: [[3], [9, 20], [15, 7]]
