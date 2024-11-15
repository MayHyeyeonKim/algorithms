// 124. Binary Tree Maximum Path Sum

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
function maxPathSum(root) {
  let maxSum = -Infinity;

  function maxGain(node) {
    if (!node) return 0;

    // 왼쪽 및 오른쪽 자식에서 최대 이익을 구함
    let leftGain = Math.max(maxGain(node.left), 0);
    let rightGain = Math.max(maxGain(node.right), 0);

    // 현재 노드를 루트로 하는 경로의 최대 합 계산
    let newPathSum = node.val + leftGain + rightGain;

    // 전체 최대 합 갱신
    maxSum = Math.max(maxSum, newPathSum);

    // 상위 노드로 전달할 값
    return node.val + Math.max(leftGain, rightGain);
  }

  maxGain(root);
  return maxSum;
}

/**

문제 설명
Binary Tree Maximum Path Sum 문제는 이진 트리에서 최댓값 경로 합을 구하는 문제입니다. 경로는 연결된 노드의 일련의 노드로 구성되며, 각 노드는 최대 한 번만 포함될 수 있습니다. 루트를 반드시 거쳐야 하는 것은 아니며, 트리의 임의의 노드들로 구성된 경로도 허용됩니다.

경로 합은 경로 상의 노드들의 값의 합을 의미하며, 주어진 트리에서 가능한 모든 경로 중 가장 큰 경로 합을 구해야 합니다.

예시

입력: root = [1, 2, 3]

출력: 6
경로: 2 -> 1 -> 3, 경로 합: 2 + 1 + 3 = 6
입력: root = [-10, 9, 20, null, null, 15, 7]

출력: 42
경로: 15 -> 20 -> 7, 경로 합: 15 + 20 + 7 = 42
제약 조건

트리의 노드 수는 [1, 3 * 10^4] 범위 내에 있음
각 노드의 값은 [-1000, 1000] 범위 내에 있음

접근 방법
이 문제는 DFS(깊이 우선 탐색)와 재귀적 백트래킹으로 해결할 수 있습니다.

최대 경로 합 계산:

각 노드에서 왼쪽 및 오른쪽 서브트리의 최대 경로 합을 구한 뒤, 그 값을 사용하여 현재 노드를 포함한 경로의 최대 합을 계산합니다.
현재 노드의 값과 왼쪽 및 오른쪽 자식의 최대 경로 합을 더해 가장 큰 값을 갱신합니다.
재귀 함수 구현:

각 노드에서 왼쪽 및 오른쪽 서브트리를 탐색하면서, 현재 노드를 루트로 하는 부분 경로의 최대 합을 계산합니다.
maxGain 함수는 현재 노드의 값을 포함하여 최대 경로 합을 구하며, 전역 변수를 사용해 최종 최대 값을 업데이트합니다.

시간 복잡도:

각 노드를 한 번씩 방문하므로 시간 복잡도는 O(N)입니다.
maxPathSum 함수는 트리의 루트를 입력으로 받아 최대 경로 합을 반환합니다.
maxGain 함수는 각 노드를 방문하면서 왼쪽과 오른쪽 자식에서 얻을 수 있는 최대 이익을 계산합니다.
maxSum 변수를 사용해 경로의 최대 합을 계속해서 갱신하며, 최종적으로 최대 경로 합을 반환합니다.

root = [1,2,3] 인 경우:
maxPathSum(root)의 반환값은 6입니다.
root = [-10,9,20,null,null,15,7] 인 경우:
maxPathSum(root)의 반환값은 42입니다.
추가 고려 사항 이 문제에서 최적 경로는 반드시 트리의 특정 루트를 포함하지 않아도 되므로, 재귀적으로 모든 경로를 체크해 전체 트리에서 최대 경로를 찾는 방식이 효과적입니다. 
*/
