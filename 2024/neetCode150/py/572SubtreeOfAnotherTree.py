class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def isSubtree(self, root, subRoot):
        if not subRoot: return True
        if not root: return False
        if self.sameTree(root, subRoot): return True
        return (self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot))
    def sameTree(self, s, t):
        if not s and not t:
            return True
        if s and t and s.val == t.val:
            return (self.sameTree(s.left, t.left) and self.sameTree(s.right, t.right))
        return False
    # TC: O(n*m) - root의 각 노드에 대해 sameTree 함수를 호출하기 때문
    # SC: O(높이) - 균형 잡힌 트리의 경우 O(log n) 비대칭적인 트리 O(n). 

root = TreeNode(3)
root.left = TreeNode(4)
root.right = TreeNode(5)
root.left.left = TreeNode(1)
root.left.right = TreeNode(2)

subRoot = TreeNode(4)
subRoot.left = TreeNode(1)
subRoot.right = TreeNode(2)

# notSubRoot = TreeNode(4)
# notSubRoot.left = TreeNode(0)
# notSubRoot.right = TreeNode(2)

# emptyTree = None

sol = Solution()
print(sol.isSubtree(root, subRoot))
# print(sol.isSubtree(root, notSubRoot))
# print(sol.isSubtree(root, emptyTree))
