function mergeStringsAlternately(word1, word2) {
  let result = "";
  let i = 0;
  let wordLen = Math.max(word1.length, word2.length);
  for (i = 0; i < wordLen; i++) {
    if (i < word1.length) {
      {
        result += word1[i];
      }
      if (i < word2.length) {
        result += word2[i];
      }
    }
  }
  return result.replace(/\s+/g, "");
}
let word1 = "abc ";
let word2 = "pqr ";
console.log(mergeStringsAlternately(word1, word2));

/**
if result should be array of characters
then, I can do the following:
let result = []
iterate through the loop as before and then return result.join("")

.join("") will convert the array to a string
 */
