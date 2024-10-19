class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if not grid:
            return 0

        rows, cols = len(grid), len(grid[0])
        directions = [(0, 1), (0, -1), (-1, 0), (1, 0)]
        island_count = 0

        def bfs(x, y):
            queue = deque([(x, y)])
            grid[x][y] = "0"

            while queue:
                cur_x, cur_y = queue.popleft()
                for direction in directions:
                    new_x = cur_x + direction[0]
                    new_y = cur_y + direction[1]
                    if (
                        0 <= new_x < rows
                        and 0 <= new_y < cols
                        and grid[new_x][new_y] == "1"
                    ):
                        queue.append((new_x, new_y))
                        grid[new_x][new_y] = "0"

        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == "1":
                    bfs(i, j)
                    island_count += 1
        return island_count
