class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def diameterOfBinaryTree(self, root):
        def height(node):
            if not node: return 0
            return 1 + max(height(node.left), height(node.right))

        queue = [root]
        res = 0
        while queue:
            currentNode = queue.pop(0)
            res = max(res, height(currentNode.left) + height(currentNode.right))
            if currentNode.left:
                queue.append(currentNode.left)
            if currentNode.right:
                queue.append(currentNode.right)
        return res
    
root = TreeNode(1)
root.left = TreeNode(2)
root.left.left = TreeNode(3)
root.left.right = TreeNode(4)
root.left.left.left = TreeNode(5)

sol = Solution()
result = sol.diameterOfBinaryTree(root)
print(result)

# 트리의 지름은 가장 긴 경로의 길이

# res = max(res, height(currentNode.left) + height(currentNode.right))
# 각 노드를 중심으로 왼쪽 서브트리와 오른쪽 서브트리의 높이를 더한 값이 그 노드를 루트로 하는 경로의 길이
# height(currentNode.left) + height(currentNode.right)는 현재 노드를 루트로 하는 경로의 길이를 계산


# if currentNode.left:
#     queue.append(currentNode.left)
# if currentNode.right:
#     queue.append(currentNode.right)
# 가장 긴 경로가 트리의 어느 위치에 있을지 알 수 없기 때문에 모든 노드를 다 탐색해 봐야 해서 queue에 모든 노드를 담아 모든 노드의 res를 구해본다. 

# 챗지피티 왈
#  이진 트리의 지름(가장 긴 경로)은 트리의 어느 위치에 있을지 알 수 없기 때문에 모든 노드를 탐색하여 각 노드를 루트로 하는 경로의 길이를 계산해야 합니다. 
# 이를 위해 큐를 사용하여 너비 우선 탐색(BFS) 방식으로 모든 노드를 방문하고 각 노드에서 가능한 최대 경로의 길이를 계산하는 것입니다.
