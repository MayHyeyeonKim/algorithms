package Grind75.java;

import Grind75.java.MergeTwoSortedLists.ListNode;

public class LinkedListCycle {
   public boolean hasCycle(ListNode head) {
       ListNode slow = head;
       ListNode fast = head;

       while (fast != null && fast.next != null) {
           slow = slow.next;
           fast = fast.next.next;

           if (slow == fast) {
               return true;
           }
       }

       return false;
   }
   public static void main(String[] args) {
    LinkedListCycle linkedListCycle = new LinkedListCycle();

    // 테스트를 위한 링크드 리스트 생성
    ListNode head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = head.next;  // 순환 생성 (3 -> 2)

    // 순환이 존재하는지 확인
    boolean result = linkedListCycle.hasCycle(head);
    System.out.println("Does the linked list have a cycle? " + result);
   }
}
