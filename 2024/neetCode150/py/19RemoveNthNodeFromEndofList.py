# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def removeNthFromEnd(self, head, n):
        dummy = ListNode(0, head)  # Create a dummy node with value 0 and point its next to the head of the list.
        left = dummy  # Initialize the left pointer to the dummy node.
        right = head  # Initialize the right pointer to the head of the list.

        while n > 0 and right:  # Move the right pointer n nodes ahead, stopping if it reaches the end of the list.
            right = right.next
            n -= 1

        while right:  # Move both pointers together until the right pointer reaches the end of the list.
            left = left.next
            right = right.next

        left.next = left.next.next  # Remove the nth node from the end by adjusting the next pointer of the node before it.
        return dummy.next  # Return the next node of the dummy node, which is the new head of the modified list.


head = ListNode(1, ListNode(2, ListNode(3,ListNode(4,(ListNode(5))))))
n = 2
sol = Solution()
result = sol.removeNthFromEnd(head, n)

# Print the modified list
while result:
    print(result.val, end=" -> ")
    result = result.next

# TC: O(n) - Two while loops traverse the list once, SC: O(1) - Constant number of pointers used