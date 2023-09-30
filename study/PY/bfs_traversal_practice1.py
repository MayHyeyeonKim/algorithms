from collections import deque
# BFS 하면 큐, 노드

class Node:
    def __init__(self,value):
        self.value = value
        self.left = None
        self.right = None

root = Node('A')
root.left = Node('B')
root.right = Node('C')
root.left.left = Node('D')
root.left.right = Node('E')
root.right.right = Node('F')
root.left.left.left = Node('G')
root.left.left.right = Node('H')

def bfs(root):
    visited = []
    if root is None:
        return []
    q = deque()
    q.append(root)
# 여기까지가 초기 세팅
    while q:
        current_node = q.popleft()
        visited.append(current_node.value)

        if current_node.left:
            q.append(current_node.left)
        if current_node.right:
            q.append(current_node.right)
    return visited

result = bfs(root)
print(result)