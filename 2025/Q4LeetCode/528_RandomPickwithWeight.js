// 528. Random Pick with Weight

/**
핵심은 가중치 배열 w 에 따라 무작위 인덱스를 뽑는 것. 
단순히 Math.random() 같은 균등분포를 쓰면 안 되고, 각 인덱스가 뽑힐 확률이 자기 가중치에 비례해야 함.

예를 들어,
w = [2,5,3]

index 0: 길이 2/10 = 20%
index 1: 길이 5/10 = 50%
index 2: 길이 3/10 = 30%

즉, [2,5,3]라는 배열은
0이 20%
1이 50%
2가 30%
확률로 랜덤 선택된다는 의미
 */

class Solution {
  constructor(w) {
    this.prefix = [];
    this.total = 0;

    for (let weight of w) {
      this.total += weight;
      this.prefix.push(this.total);
    }
  }
  pickIndex() {
    const random = Math.random() * this.total;

    // 이진 탐색으로 random이 속하는 구간 찾기
    let left = 0,
      right = this.prefix.length - 1;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);

      if (random < this.prefix[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }
}

const solution = new Solution([1, 3]);
console.log(solution.pickIndex());
console.log(solution.pickIndex());
console.log(solution.pickIndex());
console.log(solution.pickIndex());
console.log(solution.pickIndex());
