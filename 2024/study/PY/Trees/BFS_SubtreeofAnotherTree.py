from collections import deque
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isSubtree(self, root, subRoot):
        queue = deque([root])
        def compare(main, sub):
            if not main and not sub:
                return True
            if not main or not sub or main.val != sub.val:
                return False
            return compare(main.left, sub.left) and compare(main.right, sub.right)

        while queue:
            for i in range(len(queue)):
                node = queue.popleft()
                if node:
                    if compare(node, subRoot):
                        return True
                    queue.append(node.left)
                    queue.append(node.right)
        
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