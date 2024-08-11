function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit; // 함수명과 변수명이 같으면 그 변수는 함수 내부에서 우선적으로 사용됨. 변수 섀도잉
}

// Example usage:
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 5

// JavaScript는 변수와 함수 이름이 충돌하지 않도록 로컬 스코프와 전역 스코프를 분리하여 관리하기에 함수 이름과 함수 내부의 로컬 변수 이름이 같더라도 문제가 발생하지 않으며, 로컬 변수가 우선적으로 사용됨.
