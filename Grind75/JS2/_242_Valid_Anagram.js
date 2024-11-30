var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const freq = {};
  for (const char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }
  for (const char of t) {
    if (!freq[char]) return false;
    freq[char]--;
  }
  return true;
};
