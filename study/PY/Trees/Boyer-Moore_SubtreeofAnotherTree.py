class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def isSubtree(self, root, subRoot):
        def helper(node):
            if node==None:
                return "-"
            l = helper(node.left)
            r = helper(node.right)
            return f"#{l}#{node.val}#{r}#"
        
        main_tree = helper(root)
        sub_tree = helper(subRoot)

        def boyer_moore(s, pattern):
            n = len(s)
            m = len(pattern)
            if m == 0:
                return 0

            last = {}
            for i, char in enumerate(pattern):
                last[char] = i

            i = m - 1
            j = m - 1
            while i < n:
                if s[i] == pattern[j]:
                    if j == 0:
                        return True
                    else:
                        i -= 1
                        j -= 1
                else:
                    if s[i] in last:
                        i += m - min(j, 1 + last[s[i]])
                    else:
                        i += m
                    j = m - 1
            return False
            
        return boyer_moore(main_tree, sub_tree)
    
root = TreeNode(3)
root.left = TreeNode(4)
root.right = TreeNode(5)
root.left.left = TreeNode(1)
root.left.right = TreeNode(2)

subRoot = TreeNode(4)
subRoot.left = TreeNode(1)
subRoot.right = TreeNode(2)

sol = Solution()
result = sol.isSubtree(root, subRoot)
print(result)