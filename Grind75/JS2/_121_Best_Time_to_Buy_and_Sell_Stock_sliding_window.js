var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let maxProfit = 0;
  while (right < prices.length) {
    if (prices[right] > prices[left]) {
      let profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
};

prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
