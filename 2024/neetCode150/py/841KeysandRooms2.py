class Solution:
    def dfs(self, room, rooms, visited):
        visited.append(room)
        for room in rooms[room]:
            if room not in visited: 
                self.dfs(room, rooms, visited)
    def canVisitAllRooms(self, rooms):
        # 완탐 DFS BFS
        # 0에서 시작을 해서 0번에 가지고 있는 키의 방들을 방문하고, 방문했던 곳은 visited에 킵해둔다.
        # 만약 visited된 곳이 아니라면 dfs(rooms[i])
        # visted의 len과 rooms의 len이 같으면 true, 다르면 false
        visited = []
        self.dfs(0, rooms, visited)
        if len(visited) == len(rooms):
            return True
        else:
            return False

        # print(visited)

rooms = [[1], [2], [3], []]
solution = Solution()
result = solution.canVisitAllRooms(rooms)
print(f"모든 방을 방문할 수 있는가? {result}")

