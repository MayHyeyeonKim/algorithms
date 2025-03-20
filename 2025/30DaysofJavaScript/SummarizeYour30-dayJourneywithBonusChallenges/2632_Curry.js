/**
커링
💡 함수를 하나의 인자가 아닌, 여러 개의 단일 인자로 나눠서 실행하는 기법
즉, 여러 개의 인수를 받는 함수를 계속해서 "부분 적용"하는 형태로 변환하는 것!

✅ Currying(커링)은 함수를 부분적으로 실행하는 기법!
✅ 인자가 부족하면 계속 새로운 함수를 반환하다가, 다 받으면 실행!
 */

var curry = function (fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
};
