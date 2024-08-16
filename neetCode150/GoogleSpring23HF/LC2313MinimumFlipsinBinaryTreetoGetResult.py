#Minsu
# O(n)

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minimumFlips(self, root: TreeNode, result: bool) -> int:
        def dfs(root):
            if root == None:
                return

            if root.left == None and root.right == None:
                dp[root] = {0:0, 1:1} if root.val == 0 else {0:1, 1:0}
                return

            if root.left:
                dfs(root.left)
            if root.right:
                dfs(root.right)

            curr = root.val
            if curr == 2:  # OR
                for i in range(2):
                    for j in range(2):
                        v = i | j
                        if root not in dp:
                            dp[root] = {}
                        if v not in dp[root]:
                            dp[root][v] = dp[root.left][i] + dp[root.right][j]
                        else:
                            dp[root][v] = min(dp[root][v], dp[root.left][i] + dp[root.right][j])

            elif curr == 3:  # AND
                for i in range(2):
                    for j in range(2):
                        v = i & j
                        if root not in dp:
                            dp[root] = {}
                        if v not in dp[root]:
                            dp[root][v] = dp[root.left][i] + dp[root.right][j]
                        else:
                            dp[root][v] = min(dp[root][v], dp[root.left][i] + dp[root.right][j])

            elif curr == 4:  # XOR
                for i in range(2):
                    for j in range(2):
                        v = i ^ j
                        if root not in dp:
                            dp[root] = {}
                        if v not in dp[root]:
                            dp[root][v] = dp[root.left][i] + dp[root.right][j]
                        else:
                            dp[root][v] = min(dp[root][v], dp[root.left][i] + dp[root.right][j])

            else:
                child = root.left if root.left != None else root.right
                dp[root] = {}
                dp[root] = {0: dp[child][1], 1: dp[child][0]}
        dp = {}
        dfs(root)
        return dp[root][result] if result in dp[root] else float('inf')