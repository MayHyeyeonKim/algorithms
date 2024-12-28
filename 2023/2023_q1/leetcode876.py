#middle of the linked list

class Node:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def middleNode(self, head: Node):
        slow,fast = head, head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow
    def middleToEnd(self, head: Node):
        middle = self.middleNode(head)
        result = []
        current = middle
        while current:
            result.append(current.val)
            current = current.next
        return result
# Node(1)
# Node(2)
# Node(3)
# Node(4)
# Node(5)
head = Node(1, Node(2, Node(3, Node(4, Node(5)))))
solution = Solution()
middletoend = solution.middleToEnd(head)
print(middletoend)

