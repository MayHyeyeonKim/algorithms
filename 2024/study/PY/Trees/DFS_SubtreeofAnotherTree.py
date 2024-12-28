from collections import deque
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isSubtree(self, root, subRoot):
        if subRoot == None :
            return True

        if root == None :
            return False

        if self.same(root , subRoot):
            return True
        return self.isSubtree(root.left , subRoot) or self.isSubtree(root.right , subRoot)            

    def same(self , r , s):
        if r == None and s == None :
            return True

        if r and s and r.val == s.val:
            return self.same(r.right , s.right) and self.same(r.left , s.left)  
        return False  

root = TreeNode(3)
root.left = TreeNode(4)
root.right = TreeNode(5)
root.left.left = TreeNode(1)
root.left.right = TreeNode(2)

subRoot = TreeNode(4)
subRoot.left = TreeNode(1)
subRoot.right = TreeNode(2)

sol = Solution()
result = sol.isSubtree(root, subRoot)
print(result)