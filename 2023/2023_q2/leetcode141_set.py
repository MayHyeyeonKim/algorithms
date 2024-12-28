class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None
class Solution(object):
    def hasCycle(self, head):
        Set = set()
        while head:
            if head in Set:
                return True
            Set.add(head)
            head = head.next
        return False

head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = head.next

solution = Solution()
print(solution.hasCycle(head)) 