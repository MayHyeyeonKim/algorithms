class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def diameterOfBinaryTree(self, root):
        diameter = 0
        def dfs(root):
            nonlocal diameter
            if not root: 
                return 0
            left = dfs(root.left)
            right = dfs(root.right)

            diameter = max(diameter, left+right)
            return 1+ max(left,right)
        
        dfs(root)
        return diameter

root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)

sol = Solution()
result = sol.diameterOfBinaryTree(root)
print(result)

# Time Complexity = O(n)
# Space Complexity = O(h)