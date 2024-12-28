class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeTwoLists(self, list1, list2):
        cur = dummy = ListNode(0)
        while list1 and list2:
            if list1.val <= list2.val:
                cur.next = list1
                cur,list1 = cur.next, list1.next
            else:
                cur.next = list2
                cur,list2 = cur.next, list2.next
        if list1 or list2:
            cur.next = list1 if list1 else list2
        return dummy.next

def printList(head):
    while head:
        print(head.val, end=" -> ")
        head = head.next
    print("None")

# Example lists
list1 = ListNode(1, ListNode(2, ListNode(4)))
list2 = ListNode(1, ListNode(3, ListNode(5)))

# Create a Solution object
solution = Solution()

# Merge the two lists
merged_list = solution.mergeTwoLists(list1, list2)

# Print the merged list
printList(merged_list)