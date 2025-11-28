// 796 Rotate String

const rotateString = (s, goal) => {
  if (s.length !== goal.length) return false;

  const doubleS = s + s;
  if (!doubleS.includes(goal)) {
    return false;
  }
  return true;
};

console.log(rotateString("abcde", "cdeab")); // true
console.log(rotateString("abcde", "abced")); // false
console.log(rotateString("a", "a")); // true
console.log(rotateString("aa", "a")); // false
console.log(rotateString("abc", "bca")); // true
console.log(rotateString("", "")); // true
