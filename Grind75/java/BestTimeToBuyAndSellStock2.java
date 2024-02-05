package Grind75.java;

public class BestTimeToBuyAndSellStock2 {
    public static void main(String[] args) {
        int[] prices = {7,1,5,3,6,4};
        BestTimeToBuyAndSellStock2 solution = new BestTimeToBuyAndSellStock2();
        int maxProfit2 = solution.maxProfit2(prices);
        System.out.println("Maximum profit: " + maxProfit2);
    }

    public int maxProfit2(int[] prices){
        if (prices == null || prices.length <= 1){
            return 0;
        }

        int maxProfit = 0;
        int minPrice = prices[0];

        for(int i = 1; i < prices.length; i++){
            int currentPrice = prices[i];
            int profit = currentPrice - minPrice;

            if (profit > 0){
                maxProfit = Math.max(maxProfit, profit);
            } else {
                minPrice = Math.min(minPrice, currentPrice);
            }
        }
        return maxProfit;
    }
}
