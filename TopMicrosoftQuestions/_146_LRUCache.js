// 146. LRU Cache

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) return -1;

  const value = this.cache.get(key);
  this.cache.delete(key);
  this.cache.set(key, value);
  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
  }
  this.cache.set(key, value);

  if (this.cache.size > this.capacity) {
    const oldestKey = this.cache.keys().next().value; //map.keys() 이건 MapIterator를 반환함. 이 이터레이터는 cursor를 가짐 → 처음엔 head.next를 가리킴, 커서가 가리키는 첫 번째 노드만 참조해서 값을 반환함. 그래서 O(1)가능.
    this.cache.delete(oldestKey);
    this.cache.delete(oldestKey);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
