const binarySearch = function (arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid; // 찾은 경우 해당 인덱스 반환
    } else if (arr[mid] < target) {
      start = mid + 1; // 오른쪽 절반 탐색
    } else {
      end = mid - 1; // 왼쪽 절반 탐색
    }
  }

  return -1; // 찾지 못한 경우 -1 반환
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 3;
console.log(binarySearch(arr, target)); // 2 출력 (3은 인덱스 2에 위치)

// 이진 탐색의 시간 복잡도는 O(log n), 선형 탐색(O(n))보다 훨씬 효율적, 배열의 크기가 커질수록 그 차이는 더욱 커짐.
