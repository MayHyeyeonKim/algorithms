# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        list1 = []
        list2 = []
        self.dfs(root,p,list1)
        self.dfs(root,q,list2)
        for i in list1:
            for j in list2:
                if i == j:
                    return i
    
    def dfs(self, root, target, list):
        if not root:
            return False
        if root == target:
            list.insert(0,root)
            return True
        list.insert(0,root)
        if self.dfs(root.left, target, list):
            return True
        else:
            list.pop(0)
        list.insert(0,root)
        if self.dfs(root.right, target, list):
            return True
        else:
            list.pop(0)
        return False

# Create a binary tree
root = TreeNode(3)
root.left = TreeNode(5)
root.right = TreeNode(1)
root.left.left = TreeNode(6)
root.left.right = TreeNode(2)
root.right.left = TreeNode(0)
root.right.right = TreeNode(8)
root.left.right.left = TreeNode(7)
root.left.right.right = TreeNode(4)

# Initialize the solution
solution = Solution()

# Find the lowest common ancestor of nodes with values 5 and 1
ancestor = solution.lowestCommonAncestor(root, root.left, root.right)
print("Lowest Common Ancestor:", ancestor.val)
