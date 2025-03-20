/**
주어진 배열에서 K번째로 큰 숫자를 찾아야 한다.

nums = [3,2,1,5,6,4]
k = 2
이면 두 번째로 큰 숫자는 5!!

Approach1. Sort - O(nlogn)/ O(1)
Approach2. Min Heap - O(nlogk) O(k)

 */

//approach1 - sort
// var findKthLargest = function (nums, k) {
//   nums.sort((a, b) => b - a);
//   return nums[k - 1];
// };

//approach2 - min heap
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 현재 힙 크기 반환
  size() {
    return this.heap.length;
  }

  // 최소값 반환 (루트)
  peek() {
    return this.heap[0];
  }

  // 새로운 값 추가
  insert(val) {
    this.heap.push(val); // 배열 끝에 추가
    this.bubbleUp(); // 올바른 위치로 이동
  }

  // 최소값 제거
  remove() {
    if (this.size() === 1) return this.heap.pop(); // 하나만 있으면 그냥 제거
    const min = this.heap[0]; // 루트값 저장
    this.heap[0] = this.heap.pop(); // 마지막 값을 루트로 이동
    this.bubbleDown(); // 올바른 위치로 이동
    return min; // 제거된 최소값 반환
  }

  // 새 값이 들어왔을 때 위로 이동
  bubbleUp() {
    let index = this.size() - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break; // 부모가 더 작으면 끝!
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ]; // 자리 바꿈
      index = parentIndex;
    }
  }

  // 루트 값이 제거되었을 때 아래로 이동
  bubbleDown() {
    let index = 0;
    while (2 * index + 1 < this.size()) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = left;
      if (right < this.size() && this.heap[right] < this.heap[left]) {
        smallest = right;
      }
      if (this.heap[index] <= this.heap[smallest]) break;
      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
}
var findKthLargest = function (nums, k) {
  let minHeap = new MinHeap();
  for (let num of nums) {
    minHeap.insert(num);
    if (minHeap.size() > k) {
      minHeap.remove();
    }
  }
  return minHeap.peek();
};
