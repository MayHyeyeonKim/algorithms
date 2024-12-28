from collections import deque
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

#LevelOrder
class Solution:
    def maxDepth(self, root):
        max_depth = 0
        if not root: return max_depth
        que = deque()
        que.append((root,1))
        while que:
            cur_node, cur_depth = que.popleft()
            max_depth = max(max_depth, cur_depth)
            if cur_node.left:
                que.append((cur_node.left, cur_depth+1))
            if cur_node.right:
                que.append((cur_node.right, cur_depth+1))
        return max_depth

root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)
root.right.left = TreeNode(15)
root.right.right = TreeNode(7)

sol = Solution()
result = sol.maxDepth(root)
print(result)