var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return s === s.split("").reverse().join("");
};

s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
