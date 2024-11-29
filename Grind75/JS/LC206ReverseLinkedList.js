/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let next = current.next; // 다음 노드를 임시로 저장
    current.next = prev; // 현재 노드의 다음 노드를 이전 노드로 설정
    prev = current; // 이전 노드를 현재 노드로 이동 -----> prev포인터는 current포인터가 가리키고 있는 값을 가리키는 것을 할당한다.
    current = next; // 현재 노드를 다음 노드로 이동 -----> current포인터는 next포인터가 가리키고 있는 값을 가리키는 것을 할당한다.
  }

  return prev; // prev가 새로운 헤드가 됨
};
