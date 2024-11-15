// Topological Sorting
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  const inDegree = Array(numCourses).fill(0);
  const result = [];

  // 1. 그래프와 진입 차수 테이블 생성
  for (const [course, pre] of prerequisites) {
    graph[pre].push(course);
    inDegree[course]++;
  }

  // 2. 진입 차수가 0인 노드를 큐에 추가
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  // 3. BFS 수행
  while (queue.length) {
    const current = queue.shift();
    result.push(current);

    for (const next of graph[current]) {
      inDegree[next]--;
      if (inDegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  // 4. 모든 과목을 처리했는지 확인
  return result.length === numCourses ? result : [];
};
