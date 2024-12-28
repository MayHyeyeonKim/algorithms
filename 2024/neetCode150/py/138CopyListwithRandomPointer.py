class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random

class Solution:
    def copyRandomList(self, head):
        if not head:
            return None
        dic = {}
        newHead = Node(head.val)
        cur = newHead
        dic[head] = newHead

        while head:
            if head.next and head.next not in dic:
                dic[head.next] = Node(head.next.val)
            cur.next = dic.get(head.next)

            if head.random and head.random not in dic:
                dic[head.random] = Node(head.random.val)
            cur.random = dic.get(head.random)

            head = head.next
            cur = cur.next
        
        return newHead

node1 = Node(7)
node2 = Node(13)
node3 = Node(11)
node4 = Node(10)
node5 = Node(1)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

node1.random = None
node2.random = node1
node3.random = node5
node4.random = node3
node5.random = node1

solution = Solution()
new_head = solution.copyRandomList(node1)

while new_head:
    print(f"Value: {new_head.val}")
    print(f"Random Value: {new_head.random.val if new_head.random else None}")
    print("----")
    new_head = new_head.next
