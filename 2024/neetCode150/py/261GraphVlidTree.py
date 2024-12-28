class Solution:
    def validTree(self, n, edges):
        if len(edges) != n - 1:
            return False

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
            parent[v] = u  #parent[u] = v 
            return True

        parent = [-1] * (n + 1)
        for u, v in edges:
            if not union(u, v):
                return False
        return True
        
sol = Solution()
print(sol.validTree(n=5, edges=[[0,1],[0,2],[0,3],[1,4]]))

# 주어진 그래프가 트리인지 여부를 확인하는 문제