graph = {
    'a' : ['b','d','e'],
    'b' : ['a', 'c', 'd'],
    'c' : ['b'],
    'd' : ['a','b'],
    'e' : ['a']
}

from collections import deque
def bfs(graph, start_v):
    visited = [start_v]
    queue = deque(start_v)
    while queue:
        cur_v = queue.popleft()
        for v in graph[cur_v]:
            if v not in visited:
                visited.append(v)
                queue.append(v)
    return visited

result = bfs(graph, 'a')
print(result)