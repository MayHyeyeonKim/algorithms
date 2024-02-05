from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]):
        result = []
        self.inorder(root,result)
        return result
    def inorder(self, node, result):
        if node:
            self.inorder(node.left, result)
            result.append(node.val)
            self.inorder(node.right, result)

tree = TreeNode(1, None, TreeNode(2, TreeNode(3), None))
sol = Solution()
result = sol.inorderTraversal(tree)
print(result)  # [1, 3, 2]
