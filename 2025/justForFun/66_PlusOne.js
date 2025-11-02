// 66. Plus One

const plusOne = (digits) => {
  // approach1
  //   const digitString = digits.join("");
  //   console.log("digitString => ", digitString);
  //   const plusOneResult = BigInt(digitString) + 1n;
  //   console.log("plusOneResult => ", plusOneResult);
  //   console.log(typeof plusOneResult);
  //   const result = String(plusOneResult).split("").map(Number);
  //   console.log(result);
  //   return result;

  // approach2
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};

console.log(plusOne([1, 2, 3])); // [1,2,4]
console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]
console.log(plusOne([9])); // [1,0]
