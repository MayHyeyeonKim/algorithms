/**

이 문제는 두 개의 Promise가 resolve된 값을 더해서 새로운 Promise를 반환하는 함수를 만드는 문제야.

promise1과 promise2가 resolve된 값을 받아서 더한 후 새로운 Promise를 반환.
이를 위해 Promise.all()을 사용하면 두 개의 Promise를 동시에 실행하고, 두 값이 모두 resolve되면 처리 가능.


Promise.all([promise1, promise2])
 - 두 개의 Promise가 모두 resolve될 때까지 기다림.
- 배열 [val1, val2] 형태로 resolve됨.
.then(([val1, val2]) => val1 + val2)
 - val1과 val2를 꺼내서 두 값을 더한 후 반환.
새로운 Promise가 생성되어 반환됨.

 */

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  return Promise.all([promise1, promise2]).then(([val1, val2]) => val1 + val2);
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
