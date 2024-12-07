// 151. Reverse Words in a String

var reverseWords = function (s) {
  let words = [];
  let i = 0;

  while (s[i] === " " && i < s.length) i++;
  while (i < s.length) {
    let wordStart = i;
    while (s[i] !== " " && i < s.length) i++;
    let wordEnd = i;
    words.push(s.slice(wordStart, wordEnd));
    while (s[i] === " " && i < s.length) i++;
  }

  return words.reverse().join(" ");
};
