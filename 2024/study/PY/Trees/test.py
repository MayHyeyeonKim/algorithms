from collections import deque
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

root = TreeNode(1)
root.left = TreeNode(2)
root.left.right = TreeNode(5)
root.right = TreeNode(3)
root.right.right = TreeNode(4)

que = deque()
que.append([root,1])

    
print(que)

# from collections import deque

# my_dict = {'a': 1, 'b': 2, 'c': 3}
# my_deque = deque([my_dict])

# print(my_deque)