from collections import deque
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isSameTree(self, p, q):
        if not p and not q:
            return True
        elif (p and not q) or (not p and q):
            return False
        lDq = deque([p])
        rDq = deque([q])
        while lDq and rDq:
            l = lDq.popleft()
            r = rDq.popleft()
            if l.val != r.val:
                return False
            ll = l.left if l.left else None
            lr = l.right if l.right else None
            rl = r.left if r.left else None
            rr = r.right if r.right else None
            if (ll and not rl) or (not ll and rl) or (lr and not rr) or (not lr and rr):
                return False
            if ll:
                lDq.append(ll)
            if lr:
                lDq.append(lr)
            if rl:
                rDq.append(rl)
            if rr:
                rDq.append(rr)
        return True

p = TreeNode(1)
p.left = TreeNode(2)
p.right = TreeNode(3)

q = TreeNode(1)
q.left = TreeNode(2)
q.right = TreeNode(3)

sol = Solution()
result = sol.isSameTree(p,q)
print(result)