package Grind75.java;

public class BestTimeToBuyAndSellStock1 {
    public static void main(String[] args) {
        int[] prices = {7,1,5,3,6,4};
        BestTimeToBuyAndSellStock1 solution = new BestTimeToBuyAndSellStock1();
        int maxProfit = solution.maxProfit(prices);
        System.out.println("Maximum Profit: " + maxProfit);
    }

    public int maxProfit(int[] prices){
        int max_profit = 0;
        for(int i = 0; i < (prices.length - 1); i++){
            for(int j = i+1; j < prices.length; j++){
                int profit = prices[j] - prices[i];
                max_profit = Math.max(max_profit, profit);
            }
        }
        return max_profit;
    }
}

//The time complexity of O(n^2) -> may lead to time limit exceeded errors :(