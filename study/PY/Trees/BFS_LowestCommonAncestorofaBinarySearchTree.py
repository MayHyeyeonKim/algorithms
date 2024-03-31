from collections import deque
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def lowestCommonAncestor(self, root, p, q):
        queue = deque()
        queue.append(root)
        while queue:
            current = queue.popleft()
            if current.val > p.val and current.val > q.val:
                if current.left:
                    queue.append(current.left)
            elif current.val < p.val and current.val < q.val:
                if current.right:
                    queue.append(current.right)
            else:
                return current

root = TreeNode(6)
root.left = TreeNode(2)
root.right = TreeNode(8)
root.left.left = TreeNode(0)
root.left.right = TreeNode(4)
root.left.right.left = TreeNode(3)
root.left.right.right = TreeNode(5)
root.right.left = TreeNode(7)
root.right.right = TreeNode(9)

p = root.left
q = root.right

sol = Solution()
result = sol.lowestCommonAncestor(root,p, q)
print(result.val)