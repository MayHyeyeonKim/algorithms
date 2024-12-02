// const isValidPalindrome = (str) => {
//   const isPalindrome = str.split().reverse().join();
//   console.log(approach1: str === isPalindrome);
// };
// isValidPalindrome("ttfoftt");

(function isValidPalindrome(str) {
  let reversed = "";
  for (let s of str) {
    reversed = s + reversed;
  }
  console.log("approach2: ", str === reversed);
})("davad");
