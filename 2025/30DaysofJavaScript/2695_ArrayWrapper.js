/**
1. constructor (생성자)
내부 배열을 저장하는 this.arr를 생성

2. valueOf() 메서드
+ 연산자를 사용할 때 객체가 숫자로 변환될 때 호출되는 메서드
배열의 합을 반환하면 됨.

3. toString() 메서드
String(obj)를 사용할 때 객체를 문자열로 변환하는 메서드
"[" + 배열 요소들을 쉼표(,)로 합친 문자열 + "]" 형태로 반환

 */

/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
  this.arr = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
  return this.arr.reduce((sum, num) => sum + num, 0);
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
  return `[${this.arr.join(",")}]`;
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
