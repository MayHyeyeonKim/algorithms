var maxProfit = function (prices) {
  let left = 0; // 구매 지점 (left 포인터)
  let right = 1; // 판매 지점 (right 포인터)
  let maxProfit = 0; // 최대 이익을 저장하는 변수

  while (right < prices.length) {
    if (prices[right] > prices[left]) {
      // 현재 판매 가격이 구매 가격보다 크면 이익 계산
      let profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit); // 최대 이익 갱신
    } else {
      // 현재 판매 가격이 구매 가격보다 작거나 같으면 구매 지점 갱신
      left = right;
    }
    right++; // 판매 지점 한 칸 이동
  }
  return maxProfit; // 최대 이익 반환
};

// 테스트 케이스
let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 5

/**
 * 슬라이딩 윈도우는 두 개의 포인터(창문)를 움직여 필요한 구간만 빠르게 비교해 최적의 답을 찾는 방법이다.
 * 이게 좋은 이유: 모든 경우를 다 비교하지 않고도 한 번의 탐색으로 빠르게 답을 구할 수 있어서 효율적.
 * 
 * 두 개의 창문(left, right)이 같이 움직이며 문제를 해결해.
 * 창문을 움직일 때, 필요 없는 구간은 버리고 더 나은 구간으로 가.
 * 모든 경우를 다 비교하지 않고도(빠르게) 가장 좋은 결과를 찾아!
 * 
사탕 가격이 이렇게 변한다고 해보자:
[7, 1, 5, 3, 6, 4]

처음에 7원에서 사탕을 사려고 했어.
다음 날 보니까 1원이야! "오! 더 싸네!" 그래서 새로 1원에서 사기로 했어.
그다음 날 5원에 팔아! "우와! 4원 벌었어!"
또 다음 날 6원에 팔아! "이번엔 5원 벌었어! 지금까지 중에 제일 많이 벌었네!"
결국, 5원이 제일 많이 번 돈이야!

 */
