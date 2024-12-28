class TreeNode:
    def __init__ (self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isBalanced(self, root):
        def dfs(root):
            if not root:
                return (0,True)
        
            left_Depth, left_Bool = dfs(root.left)
            right_Depth, right_Bool = dfs(root.right)
            return (max(left_Depth, right_Depth)+1), left_Bool and right_Bool and abs(left_Depth - right_Depth) < 2
        return dfs(root)[1]

root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)
root.right.left = TreeNode(15)
root.right.right = TreeNode(7)

sol = Solution()
result = sol.isBalanced(root)
print(result)