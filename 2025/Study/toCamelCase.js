// 문제 2: CamelCase 변환
/**

let arr2 = ["hello", "WORLD", "ThIs", "is", "javasCript"];

1. 일단 배열의 모든 단어를 소문자로 변환하고
2. 첫번째단어는 바꾸지 않는다
3. 두번째~끝까지 단어는 첫 글자를 대문자로 변환한다
4. 모든 단어들을 이어붙이고 반환

 */

function toCamelCase(arr) {
  return arr
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join("");
}
let arr = ["hello", "WORLD", "ThIs", "is", "javasCript"];
console.log(toCamelCase(arr));
