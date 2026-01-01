// 680. Valid Palindrome II

const validPalindrome = (s) => {
  const isPal = (i, j) => {
    while (i < j) {
      if (s[i] !== s[j]) return false;
      i++;
      j--;
    }
    return true;
  };
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      return isPal(i + 1, j) || isPal(i, j - 1);
    }
    i++;
    j--;
  }
  return true;
};

const s = "abca";
console.log(validPalindrome(s)); // Output: true
