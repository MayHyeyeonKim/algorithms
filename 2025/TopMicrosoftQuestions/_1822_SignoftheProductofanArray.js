// 1822. Sign of the Product of an Array

var arraySign = function (nums) {
  let sign = 1;
  for (let num of nums) {
    if (num == 0) return 0;
    if (num < 0) sign *= -1;
  }
  return sign;
};

console.log(arraySign([-1, -2, -3, -4, 3, 2, 1])); // Output: 1
