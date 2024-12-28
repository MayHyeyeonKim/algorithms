from collections import deque


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def rightSideView(self, root):
        q = deque([root])
        res = []
        while q:
            rightNode = None
            lenq = len(q)
            for i in range(lenq):
                curNode = q.popleft()
                if curNode:
                    rightNode = curNode
                    q.append(curNode.left)
                    q.append(curNode.right)
            if rightNode:
                res.append(rightNode.val)
        return res


root1 = TreeNode(1)
root1.left = TreeNode(2)
root1.right = TreeNode(3)
root1.left.right = TreeNode(5)
root1.right.right = TreeNode(4)
root1.right.right.left = TreeNode(6)

sol = Solution()
ans = sol.rightSideView(root1)
print(ans)
