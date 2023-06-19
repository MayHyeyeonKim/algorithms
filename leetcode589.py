from collections import deque

"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""


class Solution:
    def preorder(self, root):
        output = list()

        def dfs(node):
            if not node:
                return
            output.append(node.val)

            for c in node.children:
                dfs(c)

        dfs(root)
        return output


# class Solution:
#     def preorder(self, root):
#         if not root:
#             return []
#         stack = [root]
#         output = []
#         while stack:
#             temp = stack.pop()
#             output.append(temp.val)  # 노드의 값을 저장
#             stack.extend(temp.children[::-1])
#         return output


class Solution:
    def preorder(self, root):
        q = deque([root])
        output = list()

        while q:
            candidate = q.popleft()
            output.append(candidate.val)
            for children in reversed(candidate.children):
                q.appendleft(children)
        return output
