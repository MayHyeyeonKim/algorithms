// 1615. Maximal Network Rank

var maximalNetworkRank = function (n, roads) {
  /**
    두 도시를 고르고, 두 도시 각각에 연결된 도로 수를 더한다.
    만약 그 둘 사이 직접 연결된 도로가 있다면 1을 빼준다.
    가능한 모든 도시 쌍을 검사해서 가장 큰 네트워크 랭크를 구한다.
     */

  const graph = new Array(n).fill(0).map(() => new Set());
  for (const [a, b] of roads) {
    graph[a].add(b);
    graph[b].add(a);
  }

  let maxRank = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let rank = graph[i].size + graph[j].size;

      if (graph[i].has(j)) rank--;

      maxRank = Math.max(maxRank, rank);
    }
  }
  return maxRank;
};

console.log(
  maximalNetworkRank(4, [
    [0, 1],
    [0, 2],
    [1, 2],
    [1, 3],
  ])
); // 4
