from collections import deque
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root:
            return root
        node = root
        dq = deque([root])
        while dq:
            cur = dq.popleft()
            l, r = None, None
            if cur.left:
                l = cur.left
                dq.append(l)
            if cur.right:
                r = cur.right
                dq.append(r)
            cur.left, cur.right = r, l
        return root