// 139. Word Break

function wordBreak(s, wordDict) {
  const canBreak = Array(s.length + 1).fill(false);
  canBreak[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (const word of wordDict) {
      const len = word.length;

      if (i >= len && canBreak[i - len] && s.slice(i - len, i) === word) {
        canBreak[i] = true;
        break;
      }
    }
  }
  return canBreak[s.length];
}
