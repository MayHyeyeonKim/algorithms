/**
우리는 Calculator 클래스를 만들어야 함.
이 클래스는 기본적인 사칙연산(+,-,*,/,^)을 할 수 있어야 하고, 메서드 체이닝을 지원해야
 */

class Calculator {
  /**
   * @param {number} value
   */
  constructor(value) {
    this.result = value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    this.result += value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    this.result -= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this.result *= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value === 0) throw new Error("Division by zero is not allowed");
    this.result /= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.result **= value;
    return this;
  }

  /**
   * @return {number}
   */
  getResult() {
    return this.result;
  }
}
