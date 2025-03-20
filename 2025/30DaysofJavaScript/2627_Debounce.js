/**
이 문제는 디바운스(Debounce) 함수를 구현하는 문제야.

✅ 디바운스(Debounce)란?
디바운스는 짧은 시간 안에 여러 번 호출된 함수 중에서 마지막 호출만 실행하는 방식이야.

 */

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), t);
  };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
