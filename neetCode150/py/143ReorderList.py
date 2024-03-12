# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        slow, fast = head, head.next
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        
        #연결 리스트 역순으로 뒤집는 부분
        second = slow.next
        prev = slow.next = None
        while second:
            tmp = second.next
            second.next = prev
            prev = second
            second = tmp
        
        #앞쪽리스트와 뒷쪽 리스트를 하나하나 송알송알 엮는 부분
        first, second = head, prev
        while second:
            tmp1, tmp2 = first.next, second.next
            first.next = second
            second.next = tmp1
            first, second = tmp1, tmp2

        #TC: 리스트 중간 찾기 + 뒷쪽역순뒤집기 + 앞뒤엮기 = O(n) + O(n) + O(n) = 퉁쳐서 O(n)
        #SC: 임시포인터변수들(slow, fast, second, prev, first, tmp1, tmp2)들 상수 공간 사용 = O(1)