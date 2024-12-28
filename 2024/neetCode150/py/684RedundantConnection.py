from collections import deque, defaultdict
class Solution:
    def findRedundantConnection(self, edges):
        def find(x):
            if parent[x] == -1:
                return x
            parent[x] = find(parent[x])
            return parent[x]

        def union(u, v):
            u = find(u)
            v = find(v)
            if u == v:
                return False
            parent[u] = v
            return True

        n = len(edges)
        parent = [-1] * (n + 1)
        res = []
        for u, v in edges:
            if not union(u, v):
                return [u, v]

sol = Solution()
print(sol.findRedundantConnection([[2,3],[1,2],[1,3]]))