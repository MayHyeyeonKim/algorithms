/**815. Bus Routes
 * 
 * You are given an array routes representing bus routes where routes[i] is a bus route that the ith bus repeats forever.
    For example, if routes[0] = [1, 5, 7], this means that the 0th bus travels in the sequence 1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ... forever.
    You will start at the bus stop source (You are not on any bus initially), and you want to go to the bus stop target. You can travel between bus stops by buses only.
    Return the least number of buses you must take to travel from source to target. Return -1 if it is not possible.

 *여러 개의 버스가 다니고 있고, 각 버스는 정해진 정류장을 계속해서 반복해서 돌아요. 예를 들어, 첫 번째 버스는 [1, 5, 7]이라는 정류장들을 계속 반복해서 돕니다. 1 -> 5 -> 7 -> 1 -> 5 -> 7 식으로요.
    우리는 출발지(source) 정류장에서 목적지(target) 정류장으로 가야 해요.
    단, 우리는 버스를 갈아탈 수는 있지만 걷거나 다른 방법으로는 이동할 수 없고, 버스만 이용해야 합니다.
    목표는 출발지에서 목적지까지 최소한의 버스를 타고 가는 것이에요.

 * routes = [[1,2,7], [3,6,7]], source = 1, target = 6
    첫 번째 버스 [1, 2, 7]를 타고 정류장 1에서 7로 이동할 수 있어요.
    이후 두 번째 버스 [3, 6, 7]을 갈아타고 7에서 6으로 이동할 수 있어요.
    총 2대의 버스를 타고 6까지 갈 수 있으므로 답은 2입니다.

    Example 1:
    Input: routes = [[1,2,7],[3,6,7]], source = 1, target = 6
    Output: 2
    Explanation: The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.

    Example 2:
    Input: routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12
    Output: -1

* 해결 방법 (BFS)
    이 문제는 너비 우선 탐색(BFS) 방식으로 해결할 수 있어요. BFS는 하나의 정류장에서 출발해서, 버스를 하나씩 타면서 목적지에 도달할 때까지 갈아타는 횟수를 계산해 나가는 방식이에요.
    먼저, 버스 노선에서 각 정류장에 도착할 수 있는 버스를 찾아서 기록합니다.
    BFS를 이용해 source에서 시작하여, 목표 정류장에 도달할 때까지 필요한 버스의 수를 계산해 나갑니다.
    만약 목적지에 도달할 수 없다면 -1을 반환합니다.

Map을 만들어서 각각의 정류장 번호를 키로 두고, 버스 번호를 값으로 저장한 자료 만든다.
Map(5) {
  1 => [ 0 ],
  2 => [ 0 ],
  7 => [ 0, 1 ],
  3 => [ 1 ],
  6 => [ 1 ]
}

 */

/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
  if (source === target) return 0; // 출발지와 목적지가 같으면 바로 도착

  const stopsMap = new Map(); // 정류장에 정차하는 버스들을 저장할 맵
  for (let bus = 0; bus < routes.length; bus++) {
    // 모든 버스 루트를 검사
    for (let stop of routes[bus]) {
      // 각 버스가 가는 모든 정류장을 확인
      if (!stopsMap.has(stop)) stopsMap.set(stop, []); // 정류장이 없으면 초기화
      stopsMap.get(stop).push(bus); // 정류장에 정차하는 버스를 저장
    }
  }
  console.log("c", stopsMap);

  const visitedStops = new Set(); // 이미 방문한 정류장을 저장할 집합
  const visitedBuses = new Set(); // 이미 탄 버스를 저장할 집합
  const queue = [[source, 0]]; // 탐색을 위한 큐 (현재 정류장과 버스 탄 횟수)

  visitedStops.add(source);

  while (queue.length > 0) {
    const [currentStop, busCount] = queue.shift(); // 현재 위치와 버스 탄 횟수를 꺼냄

    for (let bus of stopsMap.get(currentStop) || []) {
      // 현재 정류장에 정차하는 버스를 확인
      if (visitedBuses.has(bus)) continue; // 이미 탄 버스면 건너뜀
      visitedBuses.add(bus);

      for (let stop of routes[bus]) {
        // 버스가 가는 모든 정류장을 확인
        if (stop === target) return busCount + 1; // 목표 정류장 도착하면 버스 횟수 반환
        if (!visitedStops.has(stop)) {
          // 방문하지 않은 정류장일 경우
          visitedStops.add(stop);
          queue.push([stop, busCount + 1]); // 큐에 추가하여 탐색 계속
        }
      }
    }
  }

  return -1; // 목표에 도달할 수 없으면 -1 반환
};

routes = [
  [1, 2, 7],
  [3, 6, 7],
];
source = 1;
target = 6;
console.log(numBusesToDestination(routes, source, target));
