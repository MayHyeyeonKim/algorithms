var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      const prev = i === 0 || flowerbed[i - 1] === 0;
      const next = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;
      if (prev && next) {
        flowerbed[i] = 1;
        count++;
      }
    }
    if (count >= n) return true;
  }
  return count >= n;
};

let flowerbed = [1, 0, 0, 0, 1];
let n = 1;

console.log(canPlaceFlowers(flowerbed, n));
