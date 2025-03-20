/**
우리는 EventEmitter 클래스를 만들어야 해.
이 클래스는 이벤트(event) 를 등록하고, 이벤트가 발생하면 해당 함수들을 실행하는 기능을 가져야 해.

✅ 해야 할 일

subscribe(eventName, callback)

 - 특정 이벤트를 듣고 있다가(subscribe), 이벤트가 발생하면(emit) 실행할 콜백 함수를 등록.
 - 같은 이벤트에 여러 개의 콜백을 등록할 수 있음.
 - unsubscribe() 메서드를 반환해서 해당 이벤트에서 콜백을 제거할 수 있어야 함.

emit(eventName, args)

 - 특정 이벤트가 발생하면, 해당 이벤트에 등록된 모든 콜백을 실행하고 결과를 배열로 반환.
 - 이벤트가 없으면 빈 배열 반환.
 */

class EventEmitter {
  constructor() {
    this.events = {};
  }

  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
    return {
      unsubscribe: () => {
        this.events[eventName] = this.events[eventName].filter(
          (cb) => cb !== callback
        );
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (!this.events[eventName]) return [];
    return this.events[eventName].map((cb) => cb(...args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
