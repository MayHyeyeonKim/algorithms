# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        cur = dummy = ListNode() #=표시는 화살표처럼 봐라. cur -> dummy
        while list1 and list2: #list1과 list2가 다 있을 때
            if list1.val <list2.val:
                cur.next = list1 #=표시는 화살표처럼 봐라. cur.next -> list1
                list1,cur = list1.next, cur.next #=표시는 화살표처럼 봐라. list1,cur -> list1.next, cur.next
            else:
                cur.next = list2 #=표시는 화살표처럼 봐라. cur.next -> list2
                list2, cur = list2.next, cur.next #=표시는 화살표처럼 봐라. list2,cur -> list2.next, cur.next
        if list1 or list2: #list1과 list2중 하나만 있을 때
            cur.next = list1 if list1 else list2
        return dummy.next #list1도 list2도 없을 때