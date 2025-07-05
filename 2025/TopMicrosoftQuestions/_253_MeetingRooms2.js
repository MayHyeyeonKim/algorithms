// 가장 빨리 끝나는 회의(ends[endPointer])보다 먼저 시작하면 새로운 회의실이 필요하다
function minMeetingRooms(intervals) {
  const starts = intervals.map((interval) => interval[0]).sort((a, b) => a - b);
  const ends = intervals.map((interval) => interval[1]).sort((a, b) => a - b);
  let room = 0;
  let endPointer = 0;
  for (let i = 0; i < starts.length; i++) {
    if (starts[i] < ends[endPointer]) {
      room += 1;
    } else {
      endPointer += 1;
    }
  }
  return room;
}

intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];

console.log(minMeetingRooms(intervals));
