class Solution:
    def canVisitAllRooms(rooms):
        def dfs(i):
            visited[i] = True
            for room in rooms[i]:
                if not visited[i]:
                    dfs(room)

            n = len(rooms)
            visited = [False] * n
            dfs(0)

            return all(visited)
