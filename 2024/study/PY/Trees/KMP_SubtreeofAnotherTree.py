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

        def kmp(s, pattern):
                    length = 0
                    lps = [0] * len(pattern)
                    i = 1

                    while i < len(pattern):
                        if pattern[i] == pattern[length]:
                            length += 1
                            lps[i] = length
                            i += 1
                        else:
                            if length != 0:
                                length = lps[length-1]
                            else:
                                lps[i] = 0
                                i += 1
                    i = j = 0
                    while i < len(s):
                        if pattern[j] == s[i]:
                            i += 1
                            j += 1

                        if j == len(pattern):
                            return True
                        elif i < len(s) and pattern[j] != s[i]:
                            if j != 0:
                                j = lps[j-1]
                            else:
                                i += 1
                    return False
        return kmp(main_tree, sub_tree)
    
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