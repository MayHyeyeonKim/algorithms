const ValidWordAbbreviation = (word, abbr) => {
  let i = 0,
    j = 0;

  while (i < word.length && j < abbr.length) {
    if (isDigit(abbr[j])) {
      if (abbr[j] === "0") return false;

      let num = 0;
      while (j < abbr.length && isDigit(abbr[j])) {
        num = num * 10 + parseInt(abbr[j]);
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
};

const isDigit = (char) => {
  return char >= "0" && char <= "9";
};

let word = "internationalization";
let abbr = "i12iz4n";
console.log(ValidWordAbbreviation(word, abbr)); // true
