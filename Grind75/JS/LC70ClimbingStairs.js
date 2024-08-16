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
        let third = first + second;
        first = second; //first포인터는 "second포인터가 가리키고 있는 값이 가리키는 것"을 참조한다.
        second = third; //second포인터는 "third포인터가 가리키고 있는 값이 가리키는 것"을 참조한다.
    }

// 원시 타입(Primitive Type): 값이 직접 저장됩니다. 값을 복사할 때, 새로운 복사본이 만들어집니다.
// 참조 타입(Reference Type): 값이 저장된 메모리 주소를 참조합니다. 주소가 복사되기 때문에, 여러 변수가 동일한 객체를 가리킬 수 있습니다.

    return second;
};
