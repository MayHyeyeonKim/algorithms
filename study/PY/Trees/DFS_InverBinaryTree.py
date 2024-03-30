from collections import deque 
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def invertTree(self, root):
        if not root: return root
        root.left, root.right = root.right, root.left
        self.invertTree(root.left)
        self.invertTree(root.right)
        return root

root = TreeNode(4)
root.left = TreeNode(2)
root.right = TreeNode(7)
root.left.left = TreeNode(1)
root.right.right = TreeNode(3)
root.right.left = TreeNode(6)
root.right.right = TreeNode(9)

sol = Solution()
result = sol.invertTree(root)
print(result.val)