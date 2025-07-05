/**
 * Course Schedule II - Topological Sort using Kahn's Algorithm
 * 
 * 그래프 위상 정렬 (Topological Sorting)
    각 코스를 정점(node), prerequisite 관계를 간선(edge), 방향 그래프(Directed Graph)를 만들 수 있다. 

    ✅ 단계별 풀이 (JavaScript 기준):
        그래프와 진입 차수 배열 만들기
        진입 차수가 0인 노드부터 큐에 추가
        큐에서 하나씩 꺼내면서 결과에 추가
        그 노드의 인접 노드들의 진입 차수를 1씩 감소
        감소 후 진입 차수가 0이면 다시 큐에 추가
        모든 노드를 방문하지 못했다면 사이클 존재 → 빈 배열 반환
 */

function findOrder(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const inDegree = Array(numCourses).fill(0);

  // Build graph and in-degree array
  for (let [a, b] of prerequisites) {
    graph[b].push(a);
    inDegree[a]++;
  }

  // Initialize queue with courses having 0 in-degree
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  const order = [];

  while (queue.length > 0) {
    const course = queue.shift();
    order.push(course);

    for (let next of graph[course]) {
      inDegree[next]--;
      if (inDegree[next] === 0) queue.push(next);
    }
  }

  return order.length === numCourses ? order : [];
}

console.log(findOrder(2, [[1, 0]])); // Output: [0, 1]

console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
); // Output: [0, 1, 2, 3] or [0, 2, 1, 3]

console.log(findOrder(1, [])); // Output: [0]

console.log(
  findOrder(2, [
    [0, 1],
    [1, 0],
  ])
); // Output: [] (cycle exists)
