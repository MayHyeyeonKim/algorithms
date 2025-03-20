/**
우리는 주어진 객체(Object)나 배열(Array)에서 "Falsy" 값(거짓 같은 값)을 모두 제거해야 해.
이걸 "Compact Object" 라고 부른다.

Falsy 값이란?
다음 값들은 Falsy로 간주됨.
즉, Boolean(value) === false 인 값들!

false
null
0
"" (빈 문자열)
NaN
undefined

추가 조건
객체 안의 중첩된 배열과 객체도 검사해야 함!
배열의 경우, 인덱스 순서는 유지해야 함.

해결 방법
입력 값이 배열(Array)인지 객체(Object)인지 확인.
Falsy 값들을 제거하면서, 배열과 객체를 재귀적으로 처리.
최종적으로 Falsy 값이 없는 "Compact Object"를 반환.
 */

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map(compactObject);
  } else if (typeof obj === "object" && obj !== null) {
    return Object.fromEntries(
      Object.entries(obj)
        .filter(([_, value]) => Boolean(value))
        .map(([key, value]) => [key, compactObject(value)])
    );
  }
  return obj;
};
