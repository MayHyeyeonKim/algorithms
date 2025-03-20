/**
우리는 배열(Array) 에 새로운 메서드 groupBy(fn) 를 추가해야 해.
이 메서드는 주어진 함수 fn을 사용해서 그룹화된 객체를 반환해야 해.
 */

Array.prototype.groupBy = function (fn) {
  return this.reduce((grouped, item) => {
    const key = fn(item); //item.id
    if (!grouped[key]) grouped[key] = []; // 키가 없으면 빈 배열 생성
    grouped[key].push(item); // 해당 키에 item 추가
    return grouped;
  }, {}); //초기값은 빈객체
};

let array = [{ id: "1" }, { id: "1" }, { id: "2" }];

let fn = function (item) {
  return item.id;
};

/**
 * ✅ 실행 코드
 */
console.log(array.groupBy(fn));
