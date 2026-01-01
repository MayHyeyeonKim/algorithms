// 1941. Check if All Characters Have Equal Number of Occurrences

function areOccurrencesEqual(s) {
  const map = {};

  for (let ch of s) {
    map[ch] = (map[ch] || 0) + 1;
  }

  const counts = Object.values(map);
  const first = counts[0];

  for (let c of counts) {
    if (c !== first) return false;
  }

  return true;
}

// Example usage:
console.log(areOccurrencesEqual("abacbc")); // true
console.log(areOccurrencesEqual("aaabb")); // false
