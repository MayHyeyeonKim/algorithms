/**
이 문제는 Promise의 실행 시간을 제한하는 함수를 만드는 문제야.
즉, 주어진 비동기 함수 fn을 실행하되, 특정 시간 t를 초과하면 강제로 거부(reject)해야 해.

❌ fn이 t 밀리초를 초과하면?
즉시 reject되어야 함.
거부 이유는 반드시 "Time Limit Exceeded"라는 문자열이어야 함.

📌 해결 방법
Promise.race()를 사용해서 두 개의 Promise 중 먼저 완료된 것을 반환
 - 하나는 fn(...args) 실행 Promise
- 하나는 t 밀리초 후에 reject되는 Timeout Promise
Promise.race([fn 실행 Promise, Timeout Promise])를 반환하면
- 시간 안에 완료되면 정상적인 값 반환
- 시간 초과하면 reject 발생

✅ Promise.race() 이해하기 (비유)
Promise.race()는 경주(race) 라고 생각하면 돼!
예를 들어, 두 친구가 누가 먼저 도착하는지 경쟁한다고 생각해보자.

1. 친구 A: 어떤 계산을 하는 함수 (fn)
→ 몇 초 걸릴지 모름
2. 친구 B: 시간 초과 감시자 (setTimeout)
→ 정확히 t 밀리초 후에 "Time Limit Exceeded"라고 소리침.

👉 Promise.race()는 먼저 도착한 친구를 선택해!

만약 친구 A가 먼저 도착하면 결과를 반환 🏆
만약 친구 B가 먼저 도착하면 "Time Limit Exceeded" 에러 발생 🚨

 */

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    return Promise.race([
      fn(...args), //원래 함수 실행
      new Promise((_, reject) =>
        setTimeout(() => reject("Time Limit Exceeded"), t)
      ), //시간 초과 시 reject
    ]);
  };
};

// 이 코드에서 (_, reject)는 Promise의 executor 함수에서 첫 번째 인자(해결 함수 resolve)를 사용하지 않겠다는 의미.

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
