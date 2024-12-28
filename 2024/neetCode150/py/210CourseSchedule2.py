from collections import defaultdict
class Solution:
    def findOrder(self, numCourses, prerequisites):
        res,visited = [],{} #res: 위상 정렬 순서를 저장하는 리스트, visited:각 노드(코스)의 방문 상태를 추적
        graph = defaultdict(list)

        for a,b in prerequisites:
            graph[a].append(b)

        def dfs(node):
            if node in visited:
                return visited[node] 
            
            visited[node]=True

            for nei in graph[node]:
                if dfs(nei):
                    return True

            visited[node]=False
            res.append(node)

        for i in range(numCourses):
            if dfs(i):
                return []
        
        return res

sol = Solution()
result = sol.findOrder(numCourses=2, prerequisites=[[0,1],[1,0]])
print(result)