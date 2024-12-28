from collections import deque
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
    
class BinaryTree:
    def __init__(self, root=None):
        self.root = root
        pass
    def bfs(self):
        if self.root is None:
            return []
        visited = []
        q = deque()
        q.append(self.root)
        while q:
            node = q.popleft()
            visited.append(node.val)
            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)
        return visited


bt = BinaryTree()
bt.root = TreeNode(1)
bt.root.left = TreeNode(2)
bt.root.right = TreeNode(3)
bt.root.left.left = TreeNode(4)
bt.root.left.right = TreeNode(5)
bt.root.right.left = TreeNode(6)
bt.root.right.right = TreeNode(7)

print(bt.bfs())