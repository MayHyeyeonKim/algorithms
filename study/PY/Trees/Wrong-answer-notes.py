class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def wrongAnswer(self, root, subRoot):
        if not subRoot:
            return True
        if not root:
            return False
        if root.val == subRoot.val: #이렇게 하면 왜 안되냐면 단순히 루트 노드의 값이 같다는 것이 전체 서브트리가 같다는 의미는 아니니까, 전체 서브트리 구조가 같은지 확인해줘야 함!
            #단순 node 와 subtree 비교가 불가능한 이유는 예시로 주어진 tree 구조 자체가 단순 비교로 값이 나오는 경우가 아닌 노드 하나하나 비교해봐야 일치하는지 알 수 있는 구조이기에
            return True
        return self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)

    def isSubtree(self, root, subRoot):
        if not subRoot:
            return True
        if not root:
            return False
        if self.sameTree(root, subRoot):
            return True
        return self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)
    
    def sameTree(self, s, t):
        if not s and not t:
            return True
        if not s or not t:
            return False
        if s.val != t.val:
            return False
        return self.sameTree(s.left, t.left) and self.sameTree(s.right, t.right)
    
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