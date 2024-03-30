from collections import deque
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isBalanced(self, root):
        if not root: return True
    
        def height(root):
            if not root: return -1
            h , Q = 0, deque([[root]])
            while Q:
                level, new_level = Q.popleft(), []
                for node in level:
                    if node.right: new_level.append(node.right)
                    if node.left : new_level.append(node.left)
                if new_level: 
                    h += 1
                    Q.append(new_level)
            return h

        Q = deque([[root]])
        while Q:
            level, new_level = Q.popleft(), []
            for node in level:
                h_left, h_right = height(node.left), height(node.right)
                if abs(h_left-h_right) > 1: return False
                if node.right: new_level.append(node.right)
                if node.left : new_level.append(node.left)
            if new_level: 
                Q.append(new_level)

        return True

root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)
root.right.left = TreeNode(15)
root.right.right = TreeNode(7)

sol = Solution()
result = sol.isBalanced(root)
print(result)