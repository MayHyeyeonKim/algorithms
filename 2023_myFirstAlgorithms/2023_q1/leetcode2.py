class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        dummy = ListNode(0)
        curr = dummy
        carry = 0
        
        while l1 or l2 or carry:
            val1 = l1.val if l1 else 0
            val2 = l2.val if l2 else 0
            
            sum_ = val1 + val2 + carry
            carry = sum_ // 10
            curr.next = ListNode(sum_ % 10)
            
            curr = curr.next
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
        
        return dummy.next
l1 = ListNode(2, ListNode(4, ListNode(3)))
l2 = ListNode(5, ListNode(6, ListNode(4)))

solution = Solution()
result = solution.addTwoNumbers(l1, l2)

while result:
    print(result.val, end=" ")
    result = result.next