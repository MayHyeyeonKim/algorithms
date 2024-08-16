function climbStairs(n) {
    if (n === 1) return 1;
    let dp = new Array(n + 1);
    dp[1] = 1; //첫 번째 계단까지 도달하는 방법은 1가지, 
    dp[2] = 2; //두 번째 계단까지 도달하는 방법은 2가지
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]; //세 번째 계단부터 n번째 계단까지, i번째 계단에 도달하는 방법의 수는 dp[i-1]과 dp[i-2]를 더한 값으로 계산
    }
    return dp[n];
}

console.log(climbStairs(5)); // Output: 8


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) return n;

    let first = 1;
    let second = 2;

    for (let i = 3; i <= n; i++) {
        let third = first + second; //third는 포인터가 아니라 그냥 변수이다.
        first = second; //first 포인터는 "second 포인터가 가리키고 있는 값을 가리키는 것"을 할당한다.
        second = third; //second 포인터는 "third 포인터가 가리키고 있는 값을 가리키는 것"을 할당한다.
    }

    return second;
};
