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

        def rabin_karp(s, pattern):
            n = len(s)
            m = len(pattern)

            p_hash = hash(pattern)
            s_hash = hash(s[:m])

            for i in range(n - m + 1):
                if p_hash == s_hash and s[i:i+m] == pattern:
                    return True
                if i < n - m:
                    s_hash = hash(s[i+1:i+m+1])

            return False
        r = helper(root)
        s = helper(subRoot)

        return rabin_karp(r, s)
            
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