class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reverseList(self, head):
        prev = None
        cur = head
        while cur:
            next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        return prev
    


head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = ListNode(5)

sol = Solution()
reversed_head = sol.reverseList(head)

# 역순으로 된 연결 리스트 출력
while reversed_head:
    print(reversed_head.val, end="->")
    reversed_head = reversed_head.next
print("None")

# TC: O(n) SC: O(1)