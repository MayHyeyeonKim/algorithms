from collections import deque
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def rightSideView(self, root):
        res = []
        if root:
            que = deque(root)
            # que = deque()
            # que.append([root,1])
            while que:
                node, depth = que.popleft()
                if depth > len(res):
                    res.append([0])
                res[depth-1] = node.val
                if node.left:
                    que.append((node.left,depth+1))
                if node.right:
                    que.append((node.right,depth+1))
        return res
        # q = deque([root])
        # res = []
        # while q:
        #     rightNode = None
        #     lenq = len(q)
        #     for i in range(lenq):
        #         cur = q.popleft()
        #         if cur:
        #             rightNode = cur
        #             q.append(rightNode.left)
        #             q.append(rightNode.right)
        #     if rightNode:
        #         res.append(rightNode.val)
        # return res

root = TreeNode(1)
root.left = TreeNode(2)
root.left.right = TreeNode(5)
root.right = TreeNode(3)
root.right.right = TreeNode(4)

sol = Solution()
result = sol.rightSideView(root)
print(result)