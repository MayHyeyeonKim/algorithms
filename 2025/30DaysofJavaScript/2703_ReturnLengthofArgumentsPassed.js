/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  let res = args.length;
  return res;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
