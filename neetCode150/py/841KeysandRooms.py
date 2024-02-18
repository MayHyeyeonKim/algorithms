class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        # 완탐 DFS BFS
        # 0에서 시작을 해서 0번에 가지고 있는 키의 방들을 방문하고, 방문했던 곳은 visited에 킵해둔다.
        # 만약 visited된 곳이 아니라면 dfs(rooms[i])
        # visted의 len과 rooms의 len이 같으면 true, 다르면 false
        visited = []
        def dfs(room):
            visited.append(room)
            for room in rooms[room]:
                if room not in visited: 
                    dfs(room)

        dfs(0)
        if len(visited) == len(rooms):
            return True
        else:
            return False

        # print(visited)
            

#이 코드 왜 dfs를 canVisitAllRooms함수 밖으로 빼면 안되지?