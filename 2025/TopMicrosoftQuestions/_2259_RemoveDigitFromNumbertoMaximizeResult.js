// 2259. Remove Digit From Number to Maximize Result

var removeDigit = function (number, digit) {
  let max = "";

  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      const candidate = number.slice(0, i) + number.slice(i + 1);

      if (candidate > max) {
        max = candidate;
      }
    }
  }
  return max;
};

console.log(removeDigit("1231", "1"));
