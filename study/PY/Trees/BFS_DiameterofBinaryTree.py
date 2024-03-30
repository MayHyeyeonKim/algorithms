class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def diameterOfBinaryTree(self, root):
        def height(node):
            if not node: return 0
            return 1 + max(height(node.left), height(node.right))

        queue = [root]
        res = 0
        while queue:
            currentNode = queue.pop(0)
            res = max(res, height(currentNode.left) + height(currentNode.right))
            if currentNode.left:
                queue.append(currentNode.left)
            if currentNode.right:
                queue.append(currentNode.right)
        return res
    
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.right.right = TreeNode(5)

sol = Solution()
result = sol.diameterOfBinaryTree(root)
print(result)