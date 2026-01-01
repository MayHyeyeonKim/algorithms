// 1160. Find Words That Can Be Formed by Characters

function countCharacters(words, chars) {
  const base = {};

  for (let ch of chars) {
    base[ch] = (base[ch] || 0) + 1;
  }

  let total = 0;

  for (let word of words) {
    const temp = { ...base };
    let ok = true;

    for (let ch of word) {
      if (!temp[ch]) {
        ok = false;
        break;
      }
      temp[ch]--;
    }

    if (ok) total += word.length;
  }

  return total;
}

// Example usage:
console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"));
