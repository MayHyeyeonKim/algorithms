/**
 * 21. Best Time to Buy and Sell Stock
 */
function maxProfit(prices) {
  let maxProfit = 0;
  let left = 0;
  let right = 1;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
}

/**
 * * 122. Best Time to Buy and Sell Stock II
 */
function maxProfitII(prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
}

let prices1 = [7, 1, 5, 3, 6, 4];
let prices2 = [1, 2, 3, 4, 5];
console.log(maxProfit(prices1)); // Output: 5
console.log(maxProfitII(prices2)); // Output: 4
