function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var invertTree = function (root) {
  if (!root) return null;
  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

// invertTree 함수
var invertTree = function (root) {
  if (!root) return null;
  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

// 배열 -> 트리 변환 함수 (레벨 순서 배열로 트리 생성)
function arrayToTree(arr, index = 0) {
  if (index >= arr.length || arr[index] === null) return null;
  const node = new TreeNode(arr[index]);
  node.left = arrayToTree(arr, 2 * index + 1);
  node.right = arrayToTree(arr, 2 * index + 2);
  return node;
}

// 트리 -> 배열 변환 함수 (레벨 순서 탐색)
function treeToArray(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push(null);
    }
  }
  // 마지막 null 값 제거
  while (result[result.length - 1] === null) {
    result.pop();
  }
  return result;
}

// 테스트 데이터
const inputArray = [4, 2, 7, 1, 3, 6, 9];
const root = arrayToTree(inputArray);

console.log("Original Tree:", treeToArray(root));

const invertedRoot = invertTree(root);

console.log("Inverted Tree:", treeToArray(invertedRoot));
