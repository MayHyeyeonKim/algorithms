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
