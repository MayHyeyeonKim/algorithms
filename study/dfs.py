adj = [[0]*13 for _ in range(13)]
adj[0][1] = adj[0][7] = 1
adj[1][2] = adj[1][5] = 1
adj[2][3] = adj[2][4] = 1
adj[5][6] = 1
adj[7][8] = adj[7][9] = 1
adj[9][10] = adj[9][11] = adj[9][12] = 1

visited = [False] * 13
result = []

def dfs(start_node):
    visited[start_node] = True
    result.append(start_node)
    for next_node in range(13):
        if adj[start_node][next_node] and not visited[next_node]:
            dfs(next_node)

dfs(0)
print(result)