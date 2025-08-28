class RandomPickWithWeight {
  constructor(w) {
    this.total = 0;
    this.prefixSum = [];

    for (let weight of w) {
      this.total += weight;
      this.prefixSum.push(this.total);
    }
  }
  pickIndex() {
    const target = Math.random() * this.total;
    let left = 0;
    let right = this.prefixSum.length - 1;

    // while (left < right) {
    //   let mid = Math.floor((left + right) / 2);
    //   if (target >= this.prefixSum[mid]) {
    //     left = mid + 1;
    //   } else {
    //     right = mid;
    //   }
    // }
    // return left;

    // 바이너리 서치 대신 단순 순차 탐색 (O(n))
    for (let i = 0; i < this.prefixSum.length; i++) {
      if (target < this.prefixSum[i]) {
        return i;
      }
    }

    // 이론상 여기는 도달하지 않지만 안전하게 예외 처리
    return this.prefixSum.length - 1;
  }
}

const obj = new RandomPickWithWeight([1, 3]);
// pickIndex를 여러 번 실행해서 결과 보기
for (let i = 0; i < 5; i++) {
  console.log(obj.pickIndex());
}
