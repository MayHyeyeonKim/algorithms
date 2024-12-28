class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isBalanced(self, root):
        def helper(root):
            if not root:
                return (0, True)
            left_depth, left_bool = helper(root.left)
            right_depth, right_bool = helper(root.right)
            return (max(left_depth, right_depth)+1), left_bool and right_bool and abs(left_depth - right_depth) < 2
        return helper(root)[1]

root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)
root.right.left = TreeNode(15)
root.right.right = TreeNode(7)

sol = Solution()
result = sol.isBalanced(root)
print(result)