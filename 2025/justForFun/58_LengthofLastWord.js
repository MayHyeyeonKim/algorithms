// 58. Length of Last Word

const lengthOfLastWord = (s) => {
  const trimmedS = s.trim();
  const words = trimmedS.split(" ");
  const lastWord = words[words.length - 1];
  return lastWord.length;
};

console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6
