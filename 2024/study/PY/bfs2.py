from collections import deque


class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def bfs(root):
    if root is None:
        return 0
    visit = []
    q = deque()
    q.append(root)
    while q:
        cur_node = q.popleft()
        visit.append(cur_node.value)

        if cur_node.left:
            q.append(cur_node.left)
        elif cur_node.right:
            q.append(cur_node.right)
    return visit


# 이진 트리 생성
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
root.right.left = Node(6)
root.right.right = Node(7)

result = bfs(root)
print(result)
