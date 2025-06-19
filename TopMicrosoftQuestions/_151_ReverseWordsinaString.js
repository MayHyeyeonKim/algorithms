// 151. Reverse Words in a String

function reverseWords(s) {
  // let words = s.split(" ");
  // console.log("words 스플릿한 것: ", words);
  // words.reverse();
  // console.log("words 역순으로 뒤집은 것: ", words);
  // return words.join(" ");
  return s.trim().split(/\s+/).reverse().join(" ");
}

let s = "the sky is blue";
console.log(reverseWords(s));

// Try to think in-place!
function reverseWords2(s) {}
