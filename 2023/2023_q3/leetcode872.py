# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        root1_findLeafValues = []
        root2_findLeafValues = []

        def findLeaf(root, findLeafValues):
            if root:
                if not root.left and not root.right:
                    findLeafValues.append(root.val)
                findLeaf(root.left, findLeafValues)
                findLeaf(root.right, findLeafValues)

        findLeaf(root1, root1_findLeafValues)
        findLeaf(root2, root2_findLeafValues)
        return root1_findLeafValues == root2_findLeafValues
