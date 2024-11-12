/**
 * 
 * 너에게 여러 개의 정렬된 숫자 목록들이 있어. 각 목록은 작은 숫자부터 큰 숫자로 순서가 잘 정해져 있어. 이제 이 모든 목록들을 하나의 큰 목록으로 합쳐서, 작은 숫자부터 큰 숫자 순서로 정리해 봐야 해.
    입력이 [[1,4,5], [1,3,4], [2,6]]이라면, 숫자 목록들을 차례로 합쳐서 [1,1,2,3,4,4,5,6]처럼 만들면 돼.
    모든 숫자들이 한 줄로 이어지게 만들어서 정리하는 게 목표야!

    우선순위 큐(Priority Queue)

    [[1,4,5], [1,3,4], [2,6]]
    
    1.요 각 주머니속에 있는 숫자들을 꺼내서 큰 주머니에 모아 담기 => nodes라는 큰 주머니 만들꺼임 [1, 4, 5, 1, 3, 4, 2, 6]
    2.주머니 안에 있는 숫자들을 차례대로 정렬하기 [1,1,2,3,4,4,5,6] nodes.sort((a, b) => a - b);
    3.정렬한 숫자들로 하나의 긴 줄 만들기 => 연결 리스트
    4.완성된 긴 줄을 반환하기

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */
// ListNode 클래스 정의 (각 숫자를 담는 노드)
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  // 1. 모든 숫자를 큰 주머니에 넣기
  let nodes = [];
  for (let list of lists) {
    while (list) {
      nodes.push(list.val);
      list = list.next;
    }
  }

  // 2. 주머니 안의 숫자를 작은 순서대로 정렬하기
  nodes.sort((a, b) => a - b);

  // 3. 정렬된 숫자들로 하나의 긴 줄을 만들기
  let dummy = new ListNode();
  let current = dummy;
  for (let val of nodes) {
    current.next = new ListNode(val);
    current = current.next;
  }

  // 4. 완성된 줄을 반환하기
  return dummy.next;
};

// 테스트를 위한 연결 리스트 만들기 함수
function createLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

// 테스트용 입력을 ListNode 형식으로 변환
let lists = [
  createLinkedList([1, 4, 5]),
  createLinkedList([1, 3, 4]),
  createLinkedList([2, 6]),
];

// 결과 출력하기
let result = mergeKLists(lists);

// 연결 리스트 출력 함수
function printLinkedList(node) {
  let output = [];
  while (node) {
    output.push(node.val);
    node = node.next;
  }
  console.log(output);
}

printLinkedList(result);
