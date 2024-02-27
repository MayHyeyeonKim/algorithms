class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []

class Solution:
    def cloneGraph(self, node):
        if not node: 
            return
        # 1. clones라는 해쉬테이블을 만든다. visited면 이 해쉬테이블에 저장할것이다.
        # 2~5는 dfs다.
            # 2. 복제본이라는 변수에 Node(node.val)을 담는다.
            # 3. clones[node]에 clone을 할당한다.
            # 4. 노드의 네이버들을 도면서, 
                # 클론의 네이버에 넣는다. dfs(nei)를 또 노드로 넣어서 재귀로 돌려서 넣는다.
            # 5. 클론을 리턴한다.
        # 6. dfs(node)를 리턴한다.
        clones = {}
        def dfs(node):
            if node in clones:
                return clones[node]
            clone = Node(node.val)
            clones[node] = clone
            for n in node.neighbors:
                clone.neighbors.append(dfs(n))
            return clone
        return dfs(node)

    def print_graph(self, node, visited):
        if not node or node in visited:
            return
        visited.add(node)
        print(f"Node: {node.val}, Neighbors: {[neighbor.val for neighbor in node.neighbors]}")
        for neighbor in node.neighbors:
            self.print_graph(neighbor, visited)

# 그래프를 생성
node1 = Node(1)
node2 = Node(2)
node3 = Node(3)
node4 = Node(4)

# 그래프의 관계를 설정
node1.neighbors = [node2, node4]
node2.neighbors = [node1, node3]
node3.neighbors = [node2, node4]
node4.neighbors = [node1, node3]


solution = Solution()
# res = solution.cloneGraph(node1)
# print(res)

cloned_graph = solution.cloneGraph(node1)
solution.print_graph(cloned_graph, set())