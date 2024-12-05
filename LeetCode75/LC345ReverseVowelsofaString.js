/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let s_vow = [];
  for (let char in s) {
    if (vowels.includes(s[char])) {
      s_vow.push(s[char]);
    }
  }
  let s_vow_reversed = s_vow.reverse().join("");

  let j = 0;
  let result = [];
  for (let i in s) {
    if (vowels.includes(s[i])) {
      result.push((s[i] = s_vow_reversed[j]));
      j++;
    } else {
      result.push(s[i]);
    }
  }
  let result_string = result.join("");
  return result_string;
};
