graph = {
    'a' : ['b','d','e'],
    'b' : ['a', 'c', 'd'],
    'c' : ['b'],
    'd' : ['a','b'],
    'e' : ['a']
}

visited = []
def dfs(cur_v):
    visited.append(cur_v)
    for v in graph[cur_v]:
        if v not in visited:
            dfs(v) #재귀적으로

result = dfs('a')
print(result)
