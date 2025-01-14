function maxProfit(prices){
    let minPrice = Infinity;
    let maxProfit = 0;

    for(let price of prices){
        if(price<minPrice){
            minPrice = price;
        }

        let profit = price - minPrice

        if(profit > maxProfit){
            maxProfit = profit
        }
    }
    return maxProfit
}

prices = [7,1,5,3,6,4]
maxProfit(prices)