from collections import deque
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isValidBST(self, root):
        if not root:
            return True

        que = deque()
        que.append((root, float('-inf'), float('inf')))

        while que:
            node, minVal, maxVal = que.popleft()
            if node.val <= minVal or node.val >= maxVal:
                return False
            if node.left:
                que.append((node.left, minVal, node.val))
            if node.right:
                que.append((node.right, node.val, maxVal))
        return True

# root = TreeNode(5)
# root.left = TreeNode(1)
# root.right = TreeNode(4)
# root.right.left = TreeNode(3)
# root.right.right = TreeNode(6)

root = TreeNode(2)
root.left = TreeNode(1)
root.right = TreeNode(3)

sol = Solution()
result = sol.isValidBST(root)
print(result)