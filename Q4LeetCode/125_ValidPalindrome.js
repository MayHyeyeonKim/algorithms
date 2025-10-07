const isPalindrome = (s) => {
  const ss = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = ss.length - 1;

  while (left < right) {
    if (ss[left] !== ss[right]) return false;
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome(" ")); // true
console.log(isPalindrome("race a car")); // false
