def solution(plan):
    R = len(plan)
    C = len(plan[0])
    sub_arr = [list(row) for row in plan]
    visited = [[False] * C for _ in range(R)]

    def dfs(row, col):
        if (
            row < 0
            or row >= R
            or col < 0
            or col >= C
            or sub_arr[row][col] == "#"
            or visited[row][col] == True
        ):
            return

        sub_arr[row][col] = "."
        visited[row][col] = True

        dfs(row - 1, col)
        dfs(row + 1, col)
        dfs(row, col - 1)
        dfs(row, col + 1)

    done = 0

    for i in range(R):
        for j in range(C):
            if sub_arr[i][j] == "*":
                dfs(i, j)
                done += 1

                # print(sub_arr)
    # print(plan1)
    return done


plan1 = [".*#..*", ".*#*.#", "######", ".*..#.", "...###"]
plan2 = ["*#..", "#..#", ".##.", "...*"]
plan3 = ["**###**", "*#*#*#*", "##*#*##", "*#***#*", ".#####.", "..*#*.."]

sol1 = solution(plan1)
sol2 = solution(plan2)
sol3 = solution(plan3)
print(sol1)
print(sol2)
print(sol3)
