class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

def insert(root, key):
    if root is None:
        return Node(key)
    else:
        if root.val == key:
            return root
        elif root.val < key:
            root.right = insert(root.right, key)
        else:
            root.left = insert(root.left, key)
    return

def inorder_traversal(root): #중위순회
    if root:
        inorder_traversal(root.left)
        print(root.val)
        inorder_traversal(root.right)

def preorder_traversal(root): #전위순회
    if root:
        print(root.val)
        preorder_traversal(root.left)
        preorder_traversal(root.right)

def postorder_traversal(root): #후위순회
    if root:
        postorder_traversal(root.left)
        postorder_traversal(root.right)
        print(root.val)

root = None
root = insert(root, 50)

insert(root, 30)
insert(root, 20)
insert(root, 40)
insert(root, 70)
insert(root, 60)
insert(root, 80)

inorder_traversal(root)
preorder_traversal(root)
postorder_traversal(root)

print(inorder_traversal(root))
print(preorder_traversal(root))
print(postorder_traversal(root))