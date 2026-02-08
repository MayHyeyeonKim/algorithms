// 191. Number of 1 Bits

/**
 setBits means counting the number of 1s.
 HammingWeight, who was a famous mathematician, invented this algorithm.
 Time: O(1), Space: O(1)
*/
function hammingWeight(n) {
  let count = 0;
  while (n !== 0) {
    n &= n - 1; // Remove the lowest set bit
    count++;
  }
  return count;
}

console.log(hammingWeight(11)); // 3
// 설명: 이진수 표현 00000000000000000000000000001011에는 3개의 1이 있습니다.

// function hammingWeight(n) {
//   let count = 0;

//   while (n) {
//     count += n & 1; // 끝 비트가 1인지 확인
//     n >>>= 1; // n을 반으로 나누기
//   }

//   return count;
// }
