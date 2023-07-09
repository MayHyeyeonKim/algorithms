import heapq


class Solution:
    def minimumEffortPath(self, heights) -> int:
        rows = len(heights)
        cols = len(heights[0])

        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]

        distances = [[float("inf")] * cols for _ in range(rows)]
        distances[0][0] = 0

        minHeap = [(0, 0, 0)]

        while minHeap:
            effort, row, col = heapq.heappop(minHeap)
            if row == rows - 1 and col == cols - 1:
                return effort
            for dr, dc in directions:
                new_row, new_col = row + dr, col + dc
                if 0 <= new_row < rows and 0 <= new_col < cols:
                    new_effort = max(
                        effort, abs(heights[new_row][new_col] - heights[row][col])
                    )

                    if new_effort < distances[new_row][new_col]:
                        distances[new_row][new_col] = new_effort
                        heapq.heappush(minHeap, (new_effort, new_row, new_col))
        return -1


solution = Solution()  # Solution 클래스의 인스턴스 생성
heights = [[1, 2, 2], [3, 8, 2], [5, 3, 5]]
result = solution.minimumEffortPath(heights)  # 인스턴스를 사용하여 메서드 호출
print(result)
