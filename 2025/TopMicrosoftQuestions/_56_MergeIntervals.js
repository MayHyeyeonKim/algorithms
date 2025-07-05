// 56. Merge Intervals
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (i = 1; i < intervals.length; i++) {
    const [prevStart, prevEnd] = result[result.length - 1];
    const [curStart, curEnd] = intervals[i];

    if (curStart <= prevEnd) {
      result[result.length - 1][1] = Math.max(prevEnd, curEnd);
    } else {
      result.push([curStart, curEnd]);
    }
  }
  return result;
};
