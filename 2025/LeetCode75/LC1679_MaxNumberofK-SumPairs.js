/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  /**
        [1,2,3,4] k= 5 => (1,4)(2,3) => return 2

        [approach1] - 배열
        1. Hash Map
        2. 배열 순회하면서, 보완값 complement = k - num
        3. complement가 Hash Map에 존재하면 쌍을 만들고 Hash Map에서 complement 값을 하나 줄여준다.
        4. complement값이 없으면 현재 숫자를 Hash Map에 추가해준다.
        5. 최종적으로 쌍의 수를 반환한다
     */

  const map = new Map();
  let count = 0;

  for (let num of nums) {
    let complement = k - num;
    if (map.has(complement) && map.get(complement) > 0) {
      count++;
      map.set(complement, map.get(complement) - 1);
    } else {
      map.set(num, (map.get(num) || 0) + 1);
    }
  }
  return count;
};
