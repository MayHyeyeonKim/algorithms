/**
 * 문제:
당신에게는 항공권 목록이 주어집니다. 
각 항공권은 ["출발지", "목적지"] 형태로 주어집니다. 
여행 일정은 항상 "JFK" 공항에서 시작됩니다. 
주어진 항공권으로 가능한 모든 일정을 구해야 하며, 가능한 일정이 여러 개라면 사전순으로 가장 앞선 일정을 반환해야 합니다.

조건:
모든 항공권을 다 사용해야 합니다.
사전순으로 가장 앞선 일정을 찾아야 합니다.

Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]

해결 방법
이 문제는 그래프 문제로 볼 수 있습니다. 공항은 노드이고, 항공권은 엣지입니다. 주어진 항공권을 사용하여 "JFK"에서 시작하는 모든 가능한 경로 중 사전순으로 가장 앞서는 경로를 찾는 것이 목표입니다.

알고리즘 접근:
그래프 생성: 주어진 항공권을 이용해 각 출발지에서 도착지로 향하는 그래프를 만듭니다. 각 출발지의 도착지 목록을 사전순으로 정렬합니다.
DFS(깊이 우선 탐색): "JFK"에서 시작하여 가능한 경로를 탐색합니다. 가능한 도착지로 이동하며, 모든 항공권을 사용해야 하므로 재귀적으로 깊이 탐색합니다.
역순 삽입: DFS가 끝나면 경로를 역순으로 삽입하여 최종 일정을 완성합니다.
 */

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */

// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// Input: tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
// Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]


function findItinerary(tickets) {
    const graph = {};

    // 그래프 초기화
    for (let [from, to] of tickets) {
        if (!graph[from]) graph[from] = [];
        graph[from].push(to);
    }

    // 각 공항에서 출발하는 항공편을 사전순으로 정렬
    for (let airport in graph) {
        graph[airport].sort();
    }

    const itinerary = [];

    // DFS를 이용한 일정 재구성
    function dfs(airport) {
        const destinations = graph[airport] || [];
        while (destinations.length) {
            const nextAirport = destinations.shift();
            dfs(nextAirport);
        }
        itinerary.push(airport);
    }

    dfs("JFK");
    return itinerary.reverse();
}
