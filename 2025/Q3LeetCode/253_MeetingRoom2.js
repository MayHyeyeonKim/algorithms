/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  if (!intervals) return 0;

  const startTimes = intervals.map((i) => i[0]).sort((a, b) => a - b);
  const endTimes = intervals.map((i) => i[1]).sort((a, b) => a - b);

  console.log(startTimes); // [ 0, 5, 15 ]
  console.log(endTimes); //  [ 10, 20, 30 ]

  let i = 0;
  let j = 0;

  let usedRooms = 0;
  let maxRooms = 0;

  while (i < intervals.length) {
    if (startTimes[i] < endTimes[j]) {
      // 새로운 회의가 이전 회의 끝나기 전에 시작됨
      usedRooms++;
      i++;
    } else {
      // 이전 회의가 끝났음
      usedRooms--;
      j++;
    }
    maxRooms = Math.max(maxRooms, usedRooms);
  }
  return maxRooms;
};

/**
 * 이 알고리즘에서는 각 회의가 몇 시에 시작하고, 어떤 회의가 언제 끝나는지만 알면 된다.
 * 이 시작이 어떤 끝과 연결되어 있었는가?"는 중요하지 않다.
 *
 * 회의들이 겹치는지 안 겹치는지만 확인하면 되기 때문에 누가 누구랑 쌍인지 몰라도, 이 시점에 새 회의 시작이 이전 회의 끝보다 이른가?만 보면 된다.
 *
 * [[0, 30], [5, 10], [15, 20]]
 * 회의가 0, 5, 15에 시작하고
 * 회의가 10, 20, 30에 끝나니까
 * 이걸 타임라인에 그려 놓고
 * "시작"이 "끝"보다 앞서면 방을 늘리고,
 * "끝"이 먼저 오면 방을 줄이고 - 이 흐름만 보면 됨.
 *
 * 0   5   10   15   20   30
 |---|----|----|----|----|
 S₁  S₂   E₂   S₃   E₃   E₁
  
  S₁ → 회의 A 시작 (0)

  S₂ → 회의 B 시작 (5)

  E₂ → 회의 B 끝 (10)

  S₃ → 회의 C 시작 (15)

  E₃ → 회의 C 끝 (20)

  E₁ → 회의 A 끝 (30)

  회의가 시작되면 → 방 하나 차지해야 하니까 +1
  회의가 끝나면 → 방 하나 비워지니까 -1

  if (start < end) {
  // 새 회의가 기존 회의보다 빨리 시작 → 겹침 → 방 더 필요
  usedRooms++;
  i++;
} else {
  // 기존 회의가 먼저 끝남 → 방 하나 비었으니까 줄임
  usedRooms--;
  j++;
}

 */
