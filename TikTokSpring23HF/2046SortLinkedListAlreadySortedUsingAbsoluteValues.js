// 2046. Sort Linked List Already Sorted Using Absolute Values

/**
이 문제에서는 특이하게 절대값을 기준으로 정렬된 숫자들이 있는 연결 리스트가 있어요. 절대값이란 숫자의 크기만 보고 부호(+, -)를 무시한 값이에요. 예를 들어 -5와 5는 둘 다 절대값이 5죠.

이제 우리는 이 연결 리스트를 **실제 값(부호 포함)**을 기준으로 작은 숫자부터 큰 숫자 순서대로 다시 정렬해야 해요.

예시를 보자면:

입력이 [0, 2, -5, 5, 10, -10]이라면:
절대값 기준으로는 [0, 2, -5, 5, 10, -10] 순서로 정렬돼 있지만, 이걸 부호를 포함해서 다시 정렬하면 [-10, -5, 0, 2, 5, 10]이 돼요.

문제 해결 방법

1. 모든 숫자를 리스트에 넣기
    연결 리스트에서 숫자들을 하나씩 꺼내서 배열에 담아요.

2. 정렬하기
    배열에 있는 숫자들을 부호까지 포함해서 작은 숫자부터 큰 숫자 순서로 정렬해요.

3. 새로운 연결 리스트 만들기
    정렬된 숫자들을 하나씩 새로운 연결 리스트에 넣어요.

4. 결과 반환
    새로운 연결 리스트의 첫 번째 노드를 반환해요.
 */

// 연결 리스트의 노드 정의
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortLinkedList = function (head) {
  // 1. 모든 숫자를 배열에 모으기
  let nodes = [];
  let current = head;
  while (current) {
    nodes.push(current.val);
    current = current.next;
  }

  // 2. 배열을 부호까지 포함하여 작은 순서대로 정렬하기
  nodes.sort((a, b) => a - b);

  // 3. 정렬된 숫자로 새로운 연결 리스트 만들기
  let dummy = new ListNode();
  current = dummy;
  for (let val of nodes) {
    current.next = new ListNode(val);
    current = current.next;
  }

  // 4. 완성된 연결 리스트 반환
  return dummy.next;
};

// 예시 테스트를 위한 연결 리스트 만들기
function createLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

// 연결 리스트 출력하기
function printLinkedList(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result);
}

// 예시 테스트
let head = createLinkedList([0, 2, -5, 5, 10, -10]);
let sortedHead = sortLinkedList(head);
printLinkedList(sortedHead); // 출력: [-10, -5, 0, 2, 5, 10]
