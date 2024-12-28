class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumber(self, l1, l2):

        l1 = self.reverseList(l1)
        l2 = self.reverseList(l2)

        node = dummy = ListNode(-1)

        carry = 0
        while l1 and l2:
            carry, digit = divmod(l1.val + l2.val + carry, 10)
            node.next = ListNode(digit)
            l1,l2,node = l1.next, l2.next, node.next
        
        l = l1 or l2
        while l:
            carry, digit = divmod(l.val + carry, 10)
            node.next = ListNode(digit)
            l, node = l.next, node.next
        
        if carry:
            node.next = ListNode(carry)
        
        return self.reverseList(dummy.next)
        # return dummy.next

    def reverseList(self, head):
        prev = None
        current = head
        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
        return prev



# l1 = ListNode(9, ListNode(2, ListNode(7)))
# l2 = ListNode(2, ListNode(3, ListNode(4)))

l1 = ListNode(2, ListNode(2, ListNode(2)))
l2 = ListNode(5, ListNode(4, ListNode(3)))

sol = Solution()
result = sol.addTwoNumber(l1, l2)

def print_list(result):
    while result:
        print(result.val, end=' ')
        result = result.next

print_list(result)

# TC: O(max(m+n)) SC: O(max(m+n))