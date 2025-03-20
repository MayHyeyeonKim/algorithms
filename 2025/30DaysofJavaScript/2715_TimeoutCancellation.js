/**
이 문제는 함수 실행을 일정 시간(t) 뒤에 실행하도록 예약하지만, cancelFn을 호출하면 실행을 취소할 수 있는 기능을 구현하는 문제야.

setTimeout을 사용해 t 밀리초 뒤에 fn(args) 실행 예약
setTimeout의 반환값을 저장해서, 나중에 clearTimeout으로 실행 취소 가능하게 함
cancelFn을 반환하고, cancelFn이 호출되면 clearTimeout으로 실행 취소

 */

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  let timer = setTimeout(() => fn(...args), t);

  return function cancelFn() {
    clearTimeout(timer);
  };
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
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
 *  const maxT = Math.max(t, cancelTimeMs);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */
