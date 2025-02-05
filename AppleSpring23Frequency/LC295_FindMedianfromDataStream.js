/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.rHeap = new Heap((a, b) => a > b); //minHeap for right
  this.lHeap = new Heap((a, b) => b > a); //maxHeap for left
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.lHeap.isEmpty() || num <= this.lHeap.peek()) {
    this.lHeap.add(num);
  } else {
    this.rHeap.add(num);
  }
  //balance the two heaps
  if (this.lHeap.getSize() < this.rHeap.getSize()) {
    this.lHeap.add(this.rHeap.pop());
  } else if (this.lHeap.getSize() - this.rHeap.getSize() === 2) {
    this.rHeap.add(this.lHeap.pop());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.lHeap.getSize() > this.rHeap.getSize()) {
    return this.lHeap.peek();
  } else {
    return (this.lHeap.peek() + this.rHeap.peek()) / 2;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

var Heap = function (func) {
  this.heap = [];
  this.compareFunc = func;
};

Heap.prototype.swap = function (index1, index2) {
  var temp = this.heap[index1];
  this.heap[index1] = this.heap[index2];
  this.heap[index2] = temp;
};

Heap.prototype.isEmpty = function () {
  return this.heap.length === 0;
};

Heap.prototype.getSize = function () {
  return this.heap.length;
};

//Add value to the heap
Heap.prototype.add = function (v) {
  this.heap.push(v);
  this.heapifyUp();
};

Heap.prototype.peek = function () {
  return this.heap[0];
};

Heap.prototype.pop = function () {
  if (this.heap.length === 1) return this.heap.pop();
  var top = this.heap[0];
  this.heap[0] = this.heap.pop();
  this.heapifyDown();
  return top;
};

Heap.prototype.heapifyUp = function () {
  var index = this.heap.length - 1;
  var parent = this.getParentIndex(index);
  while (
    parent !== null &&
    this.compareFunc(this.heap[parent], this.heap[index])
  ) {
    this.swap(parent, index);
    index = parent;
    parent = this.getParentIndex(index);
  }
};

Heap.prototype.heapifyDown = function () {
  var index = 0;
  while (this.getLeftChildIndex(index)) {
    var targetChildIndex = this.getLeftChildIndex(index);
    var rightChildIndex = this.getRightChildIndex(index);
    if (
      rightChildIndex &&
      this.compareFunc(this.heap[targetChildIndex], this.heap[rightChildIndex])
    ) {
      targetChildIndex = rightChildIndex;
    }
    if (this.compareFunc(this.heap[targetChildIndex], this.heap[index])) {
      break;
    } else {
      this.swap(index, targetChildIndex);
      index = targetChildIndex;
    }
  }
};

Heap.prototype.getParentIndex = function (index) {
  var parentIndex = Math.floor((index - 1) / 2);
  return parentIndex >= 0 ? parentIndex : null;
};

Heap.prototype.getLeftChildIndex = function (index) {
  var leftChildIndex = index * 2 + 1;
  return leftChildIndex <= this.heap.length - 1 ? leftChildIndex : null;
};

Heap.prototype.getRightChildIndex = function (index) {
  var rightChildIndex = index * 2 + 2;
  return rightChildIndex <= this.heap.length - 1 ? rightChildIndex : null;
};
