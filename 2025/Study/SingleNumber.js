// 136, Single Number

/**
XOR의 중요한 성질들:

a ^ a = 0 (같은 숫자를 두 번 XOR 하면 0)

a ^ 0 = a (0과 XOR 하면 자기 자신)

순서 상관 없음: a ^ b ^ a = (a ^ a) ^ b = 0 ^ b = b

배열에서 같은 숫자는 두 번씩 나오니까,
전부 XOR 해버리면 짝지어진 숫자들은 전부 0이 되고,
결국 혼자 있는 숫자만 남는다.

 */

function singleNumber(nums) {
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  return result;
}

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1
