var sumZero = function (n) {
  const result = [];

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    result.push(i, -i);
  }

  if (n % 2 === 1) {
    result.push(0);
  }

  return result;
};

console.log(sumZero(5));
