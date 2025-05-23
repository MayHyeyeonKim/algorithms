var RandomizedSet = function () {
  this.map = new Map();
  this.arr = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false;
  this.arr.push(val);
  this.map.set(val, this.arr.length - 1);
  console.log("map은 이렇게 생겼다: ", this.map);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false;
  const index = this.map.get(val);
  console.log("인덱스: ", index);
  const last = this.arr[this.arr.length - 1];
  console.log("어레이의 맨 마지막 숫자: ", last);

  this.arr[index] = last;
  this.map.set(last, index);
  console.log("this.arr[index]: ", this.arr[index]);
  console.log("this.map: ", this.map);

  this.arr.pop();
  this.map.delete(val);
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randIndex = Math.floor(Math.random() * this.arr.length);
  return this.arr[randIndex];
};

/**
배열과 맵을 함께써야 함. O(1)
인서트할 때 맵을 통해서 확인하면 O(1)이니까 
리무브할 때 맵에서 인덱스겟하니까, 마지막 요소 스왑하고 팝하기,맵에 갱신 O(1)
랜덤가져올 때 어레이의 랜덤 인덱스에 있는 요소를 가져나오기 <- 이거 O(1)

인서트할 때 배열쓰면 끝에 빠르게 추가, 맵에 저장하면 존재여부 빠르게 확인 인덱스 저장
리무브할 때 마지막 요소 팝에 배열 사용, 삭제할 값 인덱스를 빠르게 찾기 위해
겟랜덤할 때 랜덤인덱스에 빠르게 접근가능, 사용 안함
 */
