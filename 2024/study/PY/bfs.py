from collections import deque

adj = [[0]*13 for _ in range(13)]
adj[0][1] = adj[0][7] = 1
adj[1][0] = adj[1][2] = adj[1][5] = 1
adj[2][1] = adj[2][3] = adj[2][4] = 1
adj[3][2] = adj[3][4] = 1
adj[4][2] = adj[4][3] = 1
adj[5][1] = adj[5][6] = 1
adj[6][5] = 1
adj[7][0] = adj[7][8] = adj[7][9] = 1
adj[8][7] = 1
adj[9][7] = adj[9][10] = adj[9][11] = adj[9][12] = 1
adj[10][9] = 1
adj[11][9] = 1
adj[12][9] = 1

def bfs(start_node):
    dq = deque()
    dq.append(start_node)
    visited = [False] * 13
    visited[start_node] = True
    
    while dq: #큐가 비어있지 않은 동안 반복해라.
        node = dq.popleft()
        print(node, end=' ')
        
        for next_node in range(13):
            if adj[node][next_node] and not visited[next_node]: #현재 노드와 다음 노드간 연결되어 있고, 다음 노드를 방문하지 않았다면 다음 노드를 큐에 넣고 방문했다고 표시해라.
                dq.append(next_node)
                visited[next_node] = True
                
bfs(0)