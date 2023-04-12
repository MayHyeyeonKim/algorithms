from collections import deque

def maxDepth(root):
    max_depth = 0
    if root is None:
        return max_depth
    q = deque()
    q.append((root,1))
    while q:
        cur_node, cur_depth = q.popleft()
        max_depth = max(max_depth, cur_depth) #최대값 계속 최신화해주기 (괄호 안에 있는 값 중에서 가장 큰 값을 반환)
        if cur_node.left:
            q.append((cur_node.left, cur_depth+1))
        if cur_node.right:
            q.append((cur_node.right, cur_depth+1))
    return max_depth


# Input: root = [3,9,20,None, None,15,7]

class TreeNode:
    def __init__(self, l=None,r=None,v=0):
        self.left = l
        self.right = r
        self.value = v

root = TreeNode(v=3)
root.left = TreeNode(v=9)
root.right = TreeNode(v=20)
root.right.left = TreeNode(v=15)
root.right.right = TreeNode(v=7)
maxDepth(root)
print(maxDepth(root))