// 1650. Lowest Common Ancestor of a Binary Tree III

/**
 *  approach
 *  총 걸은 길이가 같아지기 때문에 어디서든 처음 만나는 지점이 공통 조상
 *  두 노드의 깊이를 맞춘 후, 같은 경로를 따라 올라가면서 처음 만나는 조상이 공통 조상
 *
 *
 *         3
 *       / \
 *      5   1
 *     /
 *    6
 *
 *  첫 루프 : A = 6, B = 1
A = parent(6) = 5
B = parent(1) = 3

    *  두번째 루프 : A = 5, B = 3
A = parent(5) = 3
B = parent(3) = null

널 만나면~ 말 없이 있어도 가 아니라 상대편으로 바꿔주기

A = parent(3) = null
B = B === null ? p(6) : ...  → B = 6

A = A === null ? q(1) : ...  → A=1
B = parent(6)=5

A = parent(1)=3
B = parent(5)=3

그니까 요지는 null만나면 반대쪽 시작점으로 “갈아타기”를 해주면 서로의 길을 합쳐서 하나의 원형 트랙(동그라미)처럼 만들어 버림
 */

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
  this.parent = null;
}

const lca = (p, q) => {
  let A = p;
  let B = q;

  while (A !== B) {
    A = A === null ? q : A.parent;
    B = B === null ? p : B.parent;
  }
  return A;
};

// Example usage:
const root = new Node(3);
const node5 = new Node(5);
const node1 = new Node(1);
const node6 = new Node(6);

root.left = node5;
root.right = node1;
node5.parent = root;
node1.parent = root;
node5.left = node6;
node6.parent = node5;

console.log(lca(node6, node1).val);
