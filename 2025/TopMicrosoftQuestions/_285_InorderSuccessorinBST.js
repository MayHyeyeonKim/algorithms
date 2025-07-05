// 285. Inorder Successor in BST

// TreeNode 클래스 정의
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// inorderSuccessor 함수 정의
function inorderSuccessor(root, p) {
  let successor = null;

  while (root) {
    if (p.val < root.val) {
      successor = root;
      root = root.left;
    } else {
      root = root.right;
    }
  }

  return successor;
}

// BST 트리 생성
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1

const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(1);

// 테스트 노드: p = 4
const p = root.left.right; // node with val = 4

// 실행 및 출력
const successor = inorderSuccessor(root, p);
console.log("Successor of", p.val, "is", successor ? successor.val : null);
