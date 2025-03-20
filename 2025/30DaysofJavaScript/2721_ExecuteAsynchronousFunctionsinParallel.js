/**
이 문제는 비동기 함수 배열을 병렬로 실행하는 문제야.
즉, functions 배열에 있는 모든 함수들을 실행하고, 그 결과를 Promise로 반환해야 해.

functions 배열은 비동기 함수를 포함한 배열.
각 함수는 실행되면 Promise를 반환해야 함.
모든 Promise가 성공하면, 결과들을 배열로 반환.
하나라도 실패하면, 첫 번째 에러로 reject해야 함.
Promise.all()을 사용하지 않고 구현해야 함.
 */

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    let results = new Array(functions.length);
    let completed = 0;

    functions.forEach((fn, index) => {
      fn()
        .then((result) => {
          results[index] = result;
          completed++;

          if (completed === functions.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
