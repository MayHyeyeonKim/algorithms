// 528. Random Pick with Weight
/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.prefixSum = [];
  this.total = 0;

  for (let weight of w) {
    this.total += weight;
    this.prefixSum.push(this.total);
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const target = Math.random() * this.total;

  let left = 0;
  let right = this.prefixSum.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (target >= this.prefixSum[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
