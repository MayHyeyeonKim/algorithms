class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def removeElements(self, head:[ListNode], val: int):
        dummy = ListNode(0)
        dummy.next = head

        cur = dummy

        while cur.next:
            if cur.next.val == val:
                cur.next = cur.next.next
            else:
                cur = cur.next
        return dummy.next
    
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(6)
head.next.next.next = ListNode(3)
head.next.next.next.next = ListNode(4)
head.next.next.next.next.next = ListNode(5)
head.next.next.next.next.next.next = ListNode(6)

# 파이썬 솔루션 실행
solution = Solution()
result = solution.removeElements(head, 6)

# 결과 출력
while result:
    print(result.val, end=' ')
    result = result.next