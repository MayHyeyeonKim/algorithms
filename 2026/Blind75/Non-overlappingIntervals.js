// 435. Non-overlapping Intervals

/**

[1,2], [2,3], [3,4], [1,3]

[1,2], [2,3], [1,3], [3,4]


 */

function eraseOverlapIntervals(intervals) {
  intervals.sort((a, b) => a[1] - b[1]); // 왜 끝나는 기준으로 정렬하는가? -> 그리디: 가장 빨리 끝나는 구간을 선택해야 더 많은 구간을 선택할 수 있기 때문

  let count = 0; // overlap count
  let lastEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= lastEnd) {
      count++;
      lastEnd = intervals[i][1];
    }
  }

  return intervals.length - count;
}

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ]),
); // 1

// time: O(n log n) (sorting), space: O(1)
