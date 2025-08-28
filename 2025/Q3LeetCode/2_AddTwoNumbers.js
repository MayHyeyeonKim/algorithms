/**
 * 

l1, l2: 각 노드는 0~9의 숫자 하나를 담고 있는 Linked List.
숫자는 역순으로 저장되어 있음.
예: 2 -> 4 -> 3은 실제 숫자 342를 의미함.

Return the sum of two numbers represented as reversed linked lists, as a new reversed linked list.

l1 = [2, 4, 3]  // 342
l2 = [5, 6, 4]  // 465
Output: [7, 0, 8] // 342 + 465 = 807

 */

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 || l2 || carry) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummyHead.next;
}

// ================================
// 🧱 배열을 linked list로 바꾸는 함수
function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// 📤 linked list를 배열로 바꾸는 함수 (출력용)
function listToArray(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// ✅ 테스트 예시
const l1 = arrayToList([2, 4, 3]); // 342
const l2 = arrayToList([5, 6, 4]); // 465

const result = addTwoNumbers(l1, l2); // 807 → [7, 0, 8]
console.log("결과:", listToArray(result)); // [7, 0, 8]
