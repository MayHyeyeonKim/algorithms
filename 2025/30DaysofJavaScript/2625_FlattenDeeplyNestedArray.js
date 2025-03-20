/**
우리는 여러 단계로 중첩된 배열(multi-dimensional array)을 n 단계만큼 평탄화(flatten)해야 해.
즉, 배열 안에 있는 배열을 n 단계까지 풀어서 단일 배열로 만들어야 해.

재귀 함수를 사용해서 배열을 하나씩 펼친다.
현재 depth(중첩 레벨)가 n보다 작을 때만 배열을 풀어준다.
Array.flat(n)을 사용하지 않고 직접 풀어야 한다.
 */

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  if (n === 0) return arr;

  let result = [];

  function helper(subArr, depth) {
    for (let item of subArr) {
      if (Array.isArray(item) && depth < n) {
        helper(item, depth + 1);
      } else {
        result.push(item);
      }
    }
  }
  helper(arr, 0);
  return result;
};
