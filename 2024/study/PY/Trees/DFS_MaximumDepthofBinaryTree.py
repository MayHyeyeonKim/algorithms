from collections import deque
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

#PostOrder
class Solution:
    def maxDepth(self, root):
        if not root: return 0
        left = self.maxDepth(root.left)
        right = self.maxDepth(root.right)
        return 1 + max(left, right)
    
        # max_depth = 0
        # if not root: return max_depth

        # left_depth = self.maxDepth(root.left)
        # right_depth = self.maxDepth(root.right)
        # max_depth = max(left_depth, right_depth) + 1
        # return max_depth


root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)
root.right.left = TreeNode(15)
root.right.right = TreeNode(7)

sol = Solution()
result = sol.maxDepth(root)
print(result)