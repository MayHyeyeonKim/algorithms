/**
배열 내 문자열 순서만 반대로 하고, 각 문자열의 첫 글자만 대문자로 변환
["hello", "worLd", "MY", "FRIend"]


["hello", "worLd", "MY", "FRIend"] -> ["FRIend","MY","worLd","hello"] -> ["Friend", "My", "World", "Hello"]
 */

function reverseWordsAndCapitalize(arr) {
  let arr_rev = arr.reverse();
  let res = arr_rev.map((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
  console.log("cccc ", res);
  return res;
}

let arr = ["hello", "worLd", "MY", "FRIend"];

console.log("response: ", reverseWordsAndCapitalize(arr));

/**
 배열 안에 있는 스트링 단어들의 낱알파벳을 reverse해서 새 배열 반환
 */

function reverseEachWords(arr) {
  return arr.map((str) => {
    let reversed = str.split("").reverse().join("");
    return reversed.charAt(0).toUpperCase() + reversed.slice(1).toLowerCase();
  });
}
console.log(reverseEachWords(["hello", "worLd", "MY", "FRIend"]));
