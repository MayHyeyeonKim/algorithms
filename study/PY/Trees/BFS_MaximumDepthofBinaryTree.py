from collections import deque
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
    
class Solution:
    def maxDepth(self, root):
        if not root: return 0
        res = 0
        que = deque()
        que.append((root,1))
        while que:
            node, depth = que.popleft()
            res = max(res, depth)
            if node.left:
                que.append((node.left, depth+1))
            if node.right:
                que.append((node.right, depth+1))
        return res


root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)
root.right.left = TreeNode(15)
root.right.right = TreeNode(7)

sol = Solution()
result = sol.maxDepth(root)
print(result)