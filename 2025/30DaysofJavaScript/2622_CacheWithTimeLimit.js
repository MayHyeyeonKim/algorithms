/**
이 문제는 유효기간이 있는 캐시 (Time Limited Cache) 를 만드는 문제야.
즉, 데이터를 저장할 수 있는데, 각 키(key)마다 유효기간(duration) 이 있어!

시간이 지나면 해당 키는 사라져야 해!
만약 유효기간이 지나지 않았다면 값을 가져올 수 있어!

 */

var TimeLimitedCache = function () {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const alreadyExists = this.cache.has(key);

  if (alreadyExists) {
    clearTimeout(this.cache.get(key).timeout);
  }

  const timeout = setTimeout(() => this.cache.delete(key), duration);

  this.cache.set(key, { value, timeout });

  return alreadyExists;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    return this.cache.get(key).value;
  }
  return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
