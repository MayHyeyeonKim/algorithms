// 768. Max Chunks To Make Sorted II -s
/**
 * [2, 1, 3, 4, 4]
정렬된 배열: [1, 2, 3, 4, 4]

우리는 0부터 i까지 볼 때마다,
"원본 배열"과 "정렬된 배열"의 구성(숫자+개수)이 같아지면
그 위치까지 잘라도 된다는 뜻!

******** Chunk split condition: the max val of arr so far == the val at the same index in sorted arr
 */

function maxChunksToSorted(arr) {
  let sorted = [...arr].sort((a, b) => a - b);
  let count = 0;
  let maxSoFar = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    maxSoFar = Math.max(maxSoFar, arr[i]);
    if (maxSoFar === sorted[i]) {
      count++;
    }
  }

  return count;
}

console.log(maxChunksToSorted([2, 1, 3, 4, 4]));
