function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

//수동으로 이렇게 해줌쓰~
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

var mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode(0);
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }
  current.next = list1 !== null ? list1 : list2;
  return dummy.next;
};

// console.log(mergeTwoLists(list1, list2));

function printList(head) {
  const result = [];
  while (head !== null) {
    result.push(head.val); // 현재 노드의 값을 배열에 추가
    head = head.next; // 다음 노드로 이동
  }
  return result;
}

const mergedList = mergeTwoLists(list1, list2);
console.log(printList(mergedList)); // 결과를 배열로 출력

// dummy.next: 병합된 리스트의 시작점 → 결과 반환 시 사용.
// current.next: 현재 연결 중인 위치 → 병합 작업 진행 시 사용.
