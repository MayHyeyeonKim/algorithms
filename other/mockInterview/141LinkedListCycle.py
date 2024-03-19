class ListNode:
    def __init__(self,x):
        self.val = x
        self.next = None

class Solution:
    def hasCycle(self, head):
        visited = set()
        while head:
            if head in visited:
                return True
            visited.add(head)
            head = head.next
        return False

# Create the linked list [3, 2, 0, -4] with a cycle at position 1 (2 -> 0)
node3 = ListNode(3)
node2 = ListNode(2)
node0 = ListNode(0)
node4 = ListNode(-4)

node3.next = node2
node2.next = node0
node0.next = node4
node4.next = node2  # cycle at position 1

# Instantiate the Solution class
solution = Solution()

# Call the hasCycle method with the head of the linked list
result = solution.hasCycle(node3)

# Validate the result
print(result)  # Output: True




# node1 = ListNode(1)
# node2 = ListNode(2)
# node3 = ListNode(3)

# node1.next = node2
# node2.next = node3

# sol = Solution()
# result = sol.hasCycle(node1)
# print(result)