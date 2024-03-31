from collections import deque
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def levelOrder(self, root):
        result = []

        def level(root, count):
            if root == None:
                return 
            
            if len(result) <= count:
                result.append([])    
            
            result[count].append(root.val)
            level(root.left, count + 1)
            level(root.right, count + 1)

        level(root, 0)
        return result

root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)
root.right.left = TreeNode(15)
root.right.right = TreeNode(7)

sol = Solution()
result = sol.levelOrder(root)
print(result)