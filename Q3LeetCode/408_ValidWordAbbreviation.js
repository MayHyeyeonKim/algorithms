// https://leetcode.com/problems/valid-word-abbreviation/description/

/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
function validWordAbbreviation(word, abbr) {
  let i = 0;
  let j = 0;

  while (i < word.length && j < abbr.length) {
    if (isDigit(abbr[j])) {
      if (abbr[j] === "0") return false;

      let num = 0;
      while (j < abbr.length && isDigit(abbr[j])) {
        num = num * 10 + Number(abbr[j]);
        j++;
      }
      i += num;
    } else {
      if (word[i] !== abbr[j]) return false;
      i++;
      j++;
    }
  }
  return i === word.length && j === abbr.length;

  function isDigit(char) {
    return char >= "0" && char <= "9";
  }
}

console.log(validWordAbbreviation("internationalization", "i12iz4n")); // true
console.log(validWordAbbreviation("apple", "a2e")); // false
