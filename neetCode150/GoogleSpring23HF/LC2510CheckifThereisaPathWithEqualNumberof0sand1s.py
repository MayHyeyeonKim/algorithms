class Solution:
    def isThereAPath(self, grid: List[List[int]]) -> bool:
        # 백트래킹(Backtracking)은 가능한 모든 해결 방법을 탐색하는 알고리즘 기법입니다. 이 방법은 해를 찾다가 막히면, 되돌아가서 다른 경로를 찾는 방식으로 작동합니다. 
        # 즉, 탐색 공간에서 가능한 모든 경우를 시도하면서 조건에 맞지 않으면 그 경로를 포기하고 다른 경로를 시도하는 방식
        # 백트래킹의 기본 원리
            # 재귀 탐색: 문제를 해결하기 위해 재귀를 사용하여 가능한 모든 선택지를 탐색합니다.
            # 경로 선택: 특정 경로를 따라가면서 조건에 맞는지 확인합니다.
            # 가지치기(Pruning): 현재 경로가 유효하지 않다고 판단되면, 더 깊이 탐색하지 않고 이전 단계로 돌아갑니다.
            # 해결책 발견: 유효한 경로 중 조건을 만족하는 경로를 찾으면 이를 해로 간주합니다.
        # 백트래킹은 모든 가능한 경로를 시도하고 유효하지 않은 경로는 일찍 포기하는 방법입니다. 이를 통해 문제의 모든 가능한 해결책을 탐색할 수 있지만, 비효율적일 수 있으므로 최적화를 위해 가지치기를 잘 설계해야 합니다.

        # 2510. 0과 1의 개수가 같은 경로가 있는지 확인하기 문제를 해결하기 위해서는, 그리드의 좌상단에서 우하단까지 이동할 때 0과 1의 개수가 동일한 경로가 있는지 여부를 판단해야 합니다.
        # 백트래킹
        # 재귀를 사용하여 모든 가능한 경로를 탐색하고, 0과 1의 개수를 추적합니다.
        # 좌상단 (0, 0)에서 시작합니다.
        # 오른쪽으로 이동하는 경우 (i, j + 1)와 아래쪽으로 이동하는 경우 (i + 1, j)를 재귀적으로 탐색합니다.
        # 0과 1의 개수를 카운트합니다.
        # 만약 경로 중에 0의 개수가 1의 개수를 초과하거나 그 반대의 경우로 회복할 수 없는 상태가 되면, 해당 경로를 가지치기(백트래킹)합니다.
        # 우하단에 도달했을 때 0과 1의 개수가 같다면 True를 반환합니다.
        # 모든 경로를 탐색해도 조건을 만족하지 못하면 False를 반환합니다.

            # 그리드의 크기
            # n = len(grid)
            # m = len(grid[0])
            
            # # 백트래킹 함수 정의
            # def backtrack(i, j, count0, count1):
            #     # 종료 조건: 끝에 도달했을 때 0과 1의 개수가 같아야 함
            #     if i == n - 1 and j == m - 1:
            #         if grid[i][j] == 0:
            #             count0 += 1
            #         else:
            #             count1 += 1
            #         return count0 == count1

            #     # 경로에 있는 0과 1의 개수 업데이트
            #     if grid[i][j] == 0:
            #         count0 += 1
            #     else:
            #         count1 += 1

            #     # 오른쪽으로 이동
            #     if j + 1 < m and backtrack(i, j + 1, count0, count1):
            #         return True

            #     # 아래로 이동
            #     if i + 1 < n and backtrack(i + 1, j, count0, count1):
            #         return True
                
            #     # 조건에 맞는 경로가 없으면 False 반환
            #     return False

            # # 초기 재귀 호출
            # return backtrack(0, 0, 0, 0)


        #DP
        # 그리드의 각 셀에서 경로를 추적하면서, 0과 1의 개수의 차이를 기록
        # dp[i][j][d]를 정의하여 좌상단 (0,0)에서 (i,j)까지 이동했을 때 0과 1의 개수의 차이가 d일 수 있는지를 나타냅니다.
        # 초기화 단계에서, 시작점의 개수 차이를 설정합니다.
        # 각 셀 (i, j)에 대해 가능한 이동 (오른쪽, 아래쪽)을 고려하여 dp 배열을 갱신합니다.
        # 최종적으로 우하단에서 dp[n-1][m-1][0]이 True인지 확인하여 답을 도출합니다.
            n = len(grid)
            m = len(grid[0])
            
            # DP 테이블 초기화 (n x m x max_diff)
            max_diff = n + m  # 최대 차이는 그리드 크기보다 작아야 함
            dp = [[[False for _ in range(max_diff * 2 + 1)] for _ in range(m)] for _ in range(n)]
            
            # 시작점 초기화
            if grid[0][0] == 0:
                dp[0][0][max_diff + 1] = True
            else:
                dp[0][0][max_diff - 1] = True
            
            # DP 테이블 채우기
            for i in range(n):
                for j in range(m):
                    for d in range(-max_diff, max_diff + 1):
                        current_diff = max_diff + d
                        if dp[i][j][current_diff]:
                            # 오른쪽으로 이동
                            if j + 1 < m:
                                if grid[i][j + 1] == 0:
                                    dp[i][j + 1][current_diff + 1] = True
                                else:
                                    dp[i][j + 1][current_diff - 1] = True
                            
                            # 아래로 이동
                            if i + 1 < n:
                                if grid[i + 1][j] == 0:
                                    dp[i + 1][j][current_diff + 1] = True
                                else:
                                    dp[i + 1][j][current_diff - 1] = True
            
            # 결과 확인
            return dp[n-1][m-1][max_diff]
    
# # 행 = 0
# dp[0][0] = [False, False, False, False, False, False, False, False, False, False, False, False, False, False, False]
# dp[0][1] = [False, False, False, False, False, False, False, False, False, False, False, False, False, False, False]
# dp[0][2] = [False, False, False, False, False, False, False, False, False, False, False, False, False, False, False]
# dp[0][3] = [False, False, False, False, False, False, False, False, False, False, False, False, False, False, False]

# # 행 = 1
# dp[1][0] = [False, False, False, False, False, False, False, False, False, False, False, False, False, False, False]
# dp[1][1] = [False, False, False, False, False, False, False, False, False, False, False, False, False, False, False]
# dp[1][2] = [False, False, False, False, False, False, False, False, False, False, False, False, False, False, False]
# dp[1][3] = [False, False, False, False, False, False, False, False, False, False, False, False, False, False, False]

# # 행 = 2
# dp[2][0] = [False, False, False, False, False, False, False, False, False, False, False, False, False, False, False]
# dp[2][1] = [False, False, False, False, False, False, False, False, False, False, False, False, False, False, False]
# dp[2][2] = [False, False, False, False, False, False, False, False, False, False, False, False, False, False, False]
# dp[2][3] = [False, False, False, False, False, False, False, False, False, False, False, False, False, False, False]

# DFS
def hasPathWithEqualZeroesAndOnes(grid):
    m, n = len(grid), len(grid[0])
    stack = [(0, 0, 0, 0)]  # (x, y, n_ones, n_zeros)
    visited = set()  # (x, y, n_ones - n_zeros)
    
    while stack:
        x, y, n_ones, n_zeros = stack.pop()
        diff = n_ones - n_zeros
        
        if (x, y, diff) not in visited:
            visited.add((x, y, diff))
            
            if grid[x][y] == 1:
                n_ones += 1
            else:
                n_zeros += 1

            # Check if we reached the bottom-right corner
            if x == m - 1 and y == n - 1:
                if n_ones == n_zeros:
                    return True

            # Explore neighbors (right and down)
            for r in [(0, 1), (1, 0)]:
                x_bar, y_bar = x + r[0], y + r[1]
                if 0 <= x_bar < m and 0 <= y_bar < n:
                    stack.append((x_bar, y_bar, n_ones, n_zeros))

    return False

grid = [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [1, 0, 1, 0]
]

print(hasPathWithEqualZeroesAndOnes(grid))
