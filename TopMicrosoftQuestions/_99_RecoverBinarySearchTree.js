// 99. Recover Binary Search Tree
function recoverTree(root) {
  let first = null;
  let second = null;
  let prev = new TreeNode(-Infinity);
  function inorder(node) {
    if (!node) return;
    inorder(node.left);
    if (prev.val > node.val) {
      if (!first) {
        first = prev; // 첫 번째 잘못된 노드
      }
      second = node; // 두 번째 잘못된 노드
    }
    prev = node; // 현재 노드를 이전 노드로 설정
    inorder(node.right);
  }
  inorder(root);

  const temp = first.val;
  first.val = second.val;
  second.val = temp;
}

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// 중위 순회 출력 함수
function printInOrder(node) {
  if (!node) return;
  printInOrder(node.left);
  process.stdout.write(node.val + " ");
  printInOrder(node.right);
}

// [1, 3, null, null, 2]
const root = new TreeNode(1);
root.left = new TreeNode(3);
root.left.right = new TreeNode(2);

console.log("🚫 복구 전 (inorder traversal):");
printInOrder(root); // 잘못된 BST: 3 2 1
console.log("\n");

recoverTree(root); // ✅ 복구 실행

console.log("✅ 복구 후 (inorder traversal):");
printInOrder(root); // 복구된 BST: 1 2 3
console.log();

/**
unction inorder(node){
        if (!node)return;
        inorder(node.left);
        if(prev.val > node.val){
            if(!first){
                first = prev;
            }
            second = node;
        }
        prev = node;

        inorder(node.right)
    }
    inorder(root)

그럼 여기서 부터 보자 
inorder(root)에 root는 1이 들어가잖아.
그리고 1의 왼쪽 자식이 현재 3이니까 또 이 3도 inorder(3)으로 넣지.
(일단 그 노드의val을 그냥 root, node로 보자! 표현하기 쉽게)
이때 3의 왼쪽이 없으니까 빠져나오고
if(prev.val > node.val){
            if(!first){
                first = prev;
            }
            second = node;
        }
이 부분 실행해야하니까 prev는 지금 음수 인피니티이고 node.val이 3이니까 해당사항 없고 빠져 나와서
prev는 이 노드인 3이 되지.
그리고 inorder(3)을 빠져나와서 inorder(1)하고 있었으니까 이때 prev.val가 3이고 node.val가 1이니까
if(prev.val > node.val){
            if(!first){
                first = prev;
            }
            second = node;
        }
이 부분 들어가게 되고 
3 > 1 이니까 first가 없으니까 first = 3이 되고 second = 1이 되지.
그리고 빠져나와서 inorder(1의 오른쪽) 없으니까 빠져나오고
inorder(root)다했다.
그럼
    let temp = first.val;
    first.val = second.val;
    second.val = temp;
이 부분 해야하니까 temp = 3 
first.val = 1 
second.val = 3
이렇게 되지. 


second = node 가 된 거지
first = prev→ 이 현재 노드보다 앞에 있었어야 했는데 더 큰 값이었던, 이전 노드
 */
