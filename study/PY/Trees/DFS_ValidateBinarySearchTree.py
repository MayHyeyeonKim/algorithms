class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isValidBST(self, root):
        def isValidBSTHelper(node, min, max):
            if not node: 
                return True
            if ((node.val > min and node.val < max) and isValidBSTHelper(node.left, min, node.val) and isValidBSTHelper(node.right, node.val, max)): 
                return True
            return False
        return isValidBSTHelper(root, float('-inf'), float('inf'))

# root = TreeNode(5)
# root.left = TreeNode(1)
# root.right = TreeNode(4)
# root.right.left = TreeNode(3)
# root.right.right = TreeNode(6)

root = TreeNode(2)
root.left = TreeNode(1)
root.right = TreeNode(3)

sol = Solution()
result = sol.isValidBST(root)
print(result)