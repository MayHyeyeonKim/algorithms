/**
이 문제는 Memoization(메모이제이션) 개념을 이용해서 함수를 최적화하는 문제야.
즉, 같은 입력값으로 함수가 여러 번 호출되면, 첫 번째 결과를 저장해두고 이후 호출에서는 저장된 값을 반환하도록 만들어야 해.

fnName = "sum"
actions = ["call","call","getCallCount","call","getCallCount"]
values = [[2,2],[2,2],[],[1,2],[]]
Output: [4,4,1,3,2]

 */

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let cache = {};

  return function (...args) {
    let key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }

    let result = fn(...args);
    cache[key] = result;
    return result;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
