/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  /**
        1. 빈도 계산
        2. 빈도 배열 생성
        3. 고유 여부 확인
     */

  const map = new Map();
  for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const frequencies = Array.from(map.values());
  console.log(frequencies); //[3,2,1]

  const uniqueFrequencies = new Set(frequencies);
  console.log(uniqueFrequencies); //Set(3) { 3, 2, 1 }

  return frequencies.length === uniqueFrequencies.size;
};
