from collections import defaultdict

# class TreeNode:
#     def __init__(self, val=0, left=None, right=None)
#         self.val = val
#         self.left = left
#         self.right = right

# class Solution:
#     def levelOrder(self, root):
#         d = defaultdict(list)
#         def dfs(node, level):
#             if not node:
#                 return
#             d[level].append(node.val)
#             dfs(node.left, level+1)
#             dfs(node.right, level+1)
#         dfs(root, 0)
#         return d.values()


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# 주어진 함수 정의
from collections import defaultdict
from typing import List, Optional


class Solution:
    def levelOrder(self, root):
        d = defaultdict(list)

        def dfs(node, level):
            if not node:
                return
            d[level].append(node.val)
            dfs(node.left, level + 1)
            dfs(node.right, level + 1)

        dfs(root, 0)
        return list(d.values())


# 이진 트리 생성 예시
# 아래와 같은 이진 트리를 생성:   3
#                           / \
#                          9  20
#                            /  \
#                           15   7
root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)
root.right.left = TreeNode(15)
root.right.right = TreeNode(7)

# 주어진 함수 호출
solution = Solution()
result = solution.levelOrder(root)
print(result)
