# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root):
        def isMirror(left, right):
            if not left and not right:
                return True
            if not left or not right or left.val != right.val:
                return False
            return isMirror(left.left, right.right) and isMirror(left.right, right.left)

        if not root:
            return True
        return isMirror(root.left, root.right)


# 함수 isSymmetric(root):
#     만약 root가 None이면:
#         대칭이므로 True를 반환

#     리턴 isMirror(root.left, root.right)

# 함수 isMirror(left, right):
#     만약 left가 None이고 right가 None이면:
#         대칭이므로 True를 반환

#     만약 left가 None이거나 right가 None이거나 left.val와 right.val이 다르면:
#         대칭이 아니므로 False를 반환

#     리턴 isMirror(left.left, right.right) AND isMirror(left.right, right.left)

# isSymmetric 함수를 호출하여 이진 트리의 대칭 여부를 확인합니다. isMirror 함수는 재귀적으로 두 노드를 비교하여 대칭 여부를 판단합니다. 만약 어떤 서브트리가 대칭이 아니면 False를 반환하고, 모든 서브트리가 대칭이면 True를 반환합니다.
