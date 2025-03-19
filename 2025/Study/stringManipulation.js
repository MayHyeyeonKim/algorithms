/**

"Hello, my friend. how are you?"

공백을 기준으로 문자열을 쪼갠 후 그 문자열들의 순서를 reverse해라.
이때, Alphanumeric만 남겨라.

결과 값이 "you are how freind my Hello"가 되어야 한다.

🗒️ Note

/[^a-zA-Z0-9]/g -> 이럼 공백도 같이 사라져버림 //Hellomyfriendhowareyou
/[^a-zA-Z0-9 ]/g -> 이렇게 해야 공백도 유지 //Hello my friend how are you

*/

function reverseAlphanumericWords(str) {
  let str_rep = str.replace(/[^a-zA-Z0-9 ]/g, "");
  console.log(str_rep); //Hello my friend how are you
  let words = str_rep.split(" ");
  console.log(words); //[ 'Hello', 'my', 'friend', 'how', 'are', 'you' ]
  let words_rev = words.reverse();
  console.log(words_rev); //[ 'you', 'are', 'how', 'friend', 'my', 'Hello' ]
  let words_rev_convert_str = words_rev.join(" ");
  console.log(words_rev_convert_str);
  return words_rev_convert_str;
}

let str = "Hello, my friend. how are you?";

console.log("output: ", reverseAlphanumericWords(str));

function cleanAndReverseWords(str) {
  let str_reg = str.replace(/[^a-zA-Z0-9 ]/g, "");
  let res = str_reg.split(" ").reverse().join(" ");
  return res;
}

console.log("output2: ", cleanAndReverseWords(str));
