/**
이 문제는 sleep(millis) 함수를 구현하는 문제야.
이 함수는 주어진 시간(밀리초) 동안 대기한 후, Promise를 resolve해야 해.

비동기 함수 setTimeout을 활용해서 특정 시간이 지난 후 Promise를 resolve하면 돼.
new Promise(resolve => setTimeout(resolve, millis))를 사용하면 millis 밀리초 후에 resolve됨.
 */

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
