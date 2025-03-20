/**
이 문제는 주어진 함수 fn을 일정한 간격(t ms)마다 실행하다가, cancelFn이 호출되면 실행을 멈추는 기능을 구현하는 문제야.

즉시 fn(args)를 실행 (0ms에서 첫 번째 실행)
setInterval을 사용해 t ms마다 fn(args) 실행
cancelFn이 호출되면 clearInterval로 실행을 중지
 */

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  fn(...args);

  let interval = setInterval(() => fn(...args), t);

  return function cancelFn() {
    clearInterval(interval);
  };
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 2;
 *  const args = [4], t = 35, cancelTimeMs = 190;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [
 *                           //     {"time":0,"returned":8},
 *                           //     {"time":35,"returned":8},
 *                           //     {"time":70,"returned":8},
 *                           //     {"time":105,"returned":8},
 *                           //     {"time":140,"returned":8},
 *                           //     {"time":175,"returned":8}
 *                           // ]
 *  }, cancelTimeMs + t + 15)
 */
