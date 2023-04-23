class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None
class Solution:
    def hasCycle(self, head):
      dict = {}
      while head:
        if head.next not in dict:
          dict[head.next] = "아무거나"
        else:
          return True
        head = head.next
      return False
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = head.next

solution = Solution()
print(solution.hasCycle(head)) 