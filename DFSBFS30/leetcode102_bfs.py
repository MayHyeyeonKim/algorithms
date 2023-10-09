from collections import deque


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def levelOrder(self, root):
        res = []
        q = []
        q.append(root)

        while q:
            qlen = len(q)
            level = []
            for _ in range(qlen):
                node = q.pop(0)
                if node:
                    level.append(node.val)
                    q.append(node.left)
                    q.append(node.right)
            if level:
                res.append(level)
        return res


# 이진 트리 생성: 예시로 간단한 트리를 생성
#   3
#  / \
# 9  20
#   /  \
# 15   7
root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)
root.right.left = TreeNode(15)
root.right.right = TreeNode(7)

# Solution 클래스의 인스턴스 생성
solution = Solution()

# 레벨 순회 수행
result = solution.levelOrder(root)

# 결과 출력
print(result)


# class Solution:
#     def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
#         if root is None:
#             return []

#         ls = []
#         q = deque([root])

#         while len(q) > 0:
#             subls = []

#             for _ in range(len(q)):
#                 root = q.popleft()
#                 subls.append(root.val)
#                 if root.left != None: q.append(root.left)
#                 if root.right != None: q.append(root.right)

#             ls.append(subls)

#         return ls
