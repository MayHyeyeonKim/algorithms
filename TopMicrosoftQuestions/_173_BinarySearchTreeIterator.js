// 173. Binary Search Tree Iterator
/**

next(): 다음 숫자 하나 꺼냄
hasNext(): 아직 꺼낼 숫자 남았는지 확인

중위 순회: 왼쪽 → 루트 → 오른쪽 (숫자가 작은 순으로 나옴)


_leftmostInorder 함수 이름 앞의 밑줄 _은 "비공개 함수(내부용 함수)"라는 걸 약속하는 표기.
즉, "이 함수는 외부에서 직접 쓰지 마세요. 내부에서만 씁니다" 라는 뜻.
자바스크립트엔 private 키워드가 없었기 때문에 예전부터 _를 써왔음.

 */

class BSTIterator {
  constructor(root) {
    this.stack = [];
    this._leftmostInorder(root);
  }

  _leftmostInorder(node) {
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  }

  next() {
    let topNode = this.stack.pop();
    if (topNode.right) {
      this._leftmostInorder(topNode.right);
    }
    return topNode.val;
  }

  hasNext() {
    return this.stack.length > 0;
  }
}

function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

let root = new TreeNode(7);
root.left = new TreeNode(3);
root.right = new TreeNode(15);
root.right.left = new TreeNode(9);
root.right.right = new TreeNode(20);

let iterator = new BSTIterator(root);
console.log(iterator.next()); // return 3
console.log(iterator.next()); // return 7
console.log(iterator.hasNext()); // return true
console.log(iterator.next()); // return 9
console.log(iterator.hasNext()); // return true
console.log(iterator.next()); // return 15
console.log(iterator.hasNext()); // return true
console.log(iterator.next()); // return 20
console.log(iterator.hasNext()); // return false
// Output: [3, 7, true, 9, true, 15, true, 20, false]
