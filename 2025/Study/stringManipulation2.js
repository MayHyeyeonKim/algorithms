/**
원본 문자열을 reverse하기!! (새 문자열 만들지 않기)

"hello" -> 'h','e','l','l','o' -> ['o','l','l','e','h'] -> "olleh"

 */

function reverseWordsInPlace(str) {
  let arr = str.split("");
  console.log(arr);
  arr.reverse();
  console.log(arr);
  let res = arr.join(" ");
  let what_type = typeof res;
  console.log(what_type);
  return res;
}

let str = "Hello";
console.log("first: ", reverseWordsInPlace(str));

function reverseWordsInPlace2(str) {
  let res = str.split("").reverse().join("");
  return res;
}

let str2 = "zico";
console.log("second: ", reverseWordsInPlace2(str2));
