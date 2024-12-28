from collections import deque
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def goodNodes(self, root):
        que = deque()
        maxVal = root.val
        que.append((maxVal, root))
        res = 0
        while que:
            maxVal, node = que.popleft()
            if node.val >= maxVal:
                res += 1
            if node.left:
                que.append((max(maxVal, node.val), node.left))
            if node.right:
                que.append((max(maxVal, node.val), node.right))
        return res

root = TreeNode(3)
root.left = TreeNode(1)
root.left.left = TreeNode(3)
root.right = TreeNode(4)
root.right.left = TreeNode(1)
root.right.right = TreeNode(5)

sol = Solution()
result = sol.goodNodes(root)
print(result)
