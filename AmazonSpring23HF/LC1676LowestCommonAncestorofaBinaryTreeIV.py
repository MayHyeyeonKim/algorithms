# 1676. Lowest Common Ancestor of a Binary Tree IV

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

class Solution:
    def lowestCommonAncestor(self, root, nodes):

        node_set = set(nodes)
        # print(node_set)

        def dfs(node):
            if not node:
                return None
            
            if node in node_set:
                return node
            
            left = dfs(node.left)
            right = dfs(node.right)

            if left and right:
                return node
            
            return left if left else right
        
        return dfs(root)



#         3
#       /   \
#      5     1
#     / \   / \
#    6   2 0   8
#       / \
#      7   4

# 노드 생성
root = TreeNode(3)
root.left = TreeNode(5)
root.right = TreeNode(1)
root.left.left = TreeNode(6)
root.left.right = TreeNode(2)
root.right.left = TreeNode(0)
root.right.right = TreeNode(8)
root.left.right.left = TreeNode(7)
root.left.right.right = TreeNode(4)

# 찾을 노드 리스트 (예: [7, 4])
nodes = [root.left.right.left, root.left.right.right]  # [7, 4]

# 솔루션 인스턴스 생성 및 함수 호출
solution = Solution()
lca = solution.lowestCommonAncestor(root, nodes)

# 결과 출력
print(f"Lowest Common Ancestor of nodes {nodes[0].val} and {nodes[1].val} is: {lca.val}")