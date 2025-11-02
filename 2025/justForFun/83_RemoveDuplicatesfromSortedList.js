// 83. Remove Duplicates from Sorted List

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const deleteDuplicates = (head) => {
  let current = head;
  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head;
};

// Helper function to create a linked list from an array
const createLinkedList = (arr) => {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
};

// Helper function to convert linked list to array
const linkedListToArray = (head) => {
  let arr = [];
  let current = head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
};

// Test cases
let head1 = createLinkedList([1, 1, 2]);
let result1 = deleteDuplicates(head1);
console.log(linkedListToArray(result1)); // [1, 2]

let head2 = createLinkedList([1, 1, 2, 3, 3]);
let result2 = deleteDuplicates(head2);
console.log(linkedListToArray(result2)); // [1, 2, 3]

let head3 = createLinkedList([]);
let result3 = deleteDuplicates(head3);
console.log(linkedListToArray(result3)); // []

let head4 = createLinkedList([1, 1, 1, 1]);
let result4 = deleteDuplicates(head4);
console.log(linkedListToArray(result4)); // [1]

let head5 = createLinkedList([1, 2, 3, 4, 5]);
let result5 = deleteDuplicates(head5);
console.log(linkedListToArray(result5)); // [1, 2, 3, 4, 5]
