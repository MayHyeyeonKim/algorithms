// 토폴로지 소트 (위상정렬): 위상 정렬은 유향 비순환 그래프(Directed Acyclic Graph, DAG)에서 노드를 선형적으로 정렬하는 방법

/**
예를 들어, 다음과 같은 작업 순서가 있다.

A 작업을 먼저 해야 B 작업을 할 수 있다.
B 작업을 해야 C 작업을 할 수 있다.
A 작업을 해야 D 작업을 할 수 있다.

A → B → C → D
A → D → B → C

위상 정렬의 결과는 위처럼 여러 가지가 나올 수 있지만, 공통적으로 A 작업이 항상 가장 먼저 수행되어야 한다는 조건이 충족
ex) 의존성 해결, 사이클 검출: 위상 정렬을 수행하다가 모든 노드를 방문하지 못하는 경우, 그래프에 사이클이 존재한다는 것을 알 수 있음

위상 정렬을 구현하는 방법:
1. Kahn의 알고리즘 (BFS 기반):

- 모든 노드의 진입 차수(in-degree)를 계산
- 진입 차수가 0인 노드를 큐에 추가
- 큐에서 노드를 꺼내면서, 해당 노드와 연결된 간선을 제거하고, 새롭게 진입 차수가 0이 된 노드를 큐에 추가
- 큐에서 노드를 꺼낸 순서가 위상 정렬의 결과

2. DFS 기반 방법:

- 각 노드에 대해 DFS를 수행하면서, 모든 후속 노드를 방문한 후 현재 노드를 스택에 쌓는다
- DFS가 끝난 후 스택에 쌓인 노드들을 꺼내면 위상 정렬의 결과를 얻을 수 있다

 * 
 */

/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function(colors, edges) {
    const n = colors.length;
    const visited = Array(n).fill(0);
    const maxCount = Array(n).fill(0).map(_=>Array(26).fill(0));
    const adj = Array(n).fill(0).map(_=>[]);
    
    for(const [a,b] of edges){
      adj[a].push(b);
    }
    let res = 0;
    for(let i=0; i<n; i++){
      res = Math.max(res, dfs(i, maxCount));
    };
    return res === Infinity ? -1 : res;

    function dfs(node, colorsCount){
      const cur = colors[node].charCodeAt()-97;
      if(!visited[node]){
        visited[node] = 1;
        for(const next of adj[node]){
          if(dfs(next, colorsCount) === Infinity){
            return Infinity;
          }
          for(let k=0; k<26; k++){
            maxCount[node][k] = Math.max(maxCount[node][k], maxCount[next][k]);
          }
        }
        maxCount[node][cur]++;
        visited[node] = 2;
      }
      return visited[node] === 2 ? maxCount[node][cur] : Infinity;
    }
};