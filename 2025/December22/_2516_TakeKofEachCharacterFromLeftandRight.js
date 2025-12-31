// 2516. Take K of Each Character From Left and Right

function takeCharacters(s, k) {
  const n = s.length;

  const total = { a: 0, b: 0, c: 0 };
  for (const ch of s) {
    total[ch]++;
  }

  if (total.a < k || total.b < k || total.c < k) {
    return -1;
  }

  const allowed = {
    a: total.a - k,
    b: total.b - k,
    c: total.c - k,
  };

  let left = 0;
  let maxMiddle = 0;
  const window = { a: 0, b: 0, c: 0 };

  for (let right = 0; right < n; right++) {
    window[s[right]]++;

    while (window.a > allowed.a || window.b > allowed.b || window.c > allowed.c) {
      window[s[left]]--;
      left++;
    }
    maxMiddle = Math.max(maxMiddle, right - left + 1);
  }
  return n - maxMiddle;
}

console.log(takeCharacters("aabaaaacaabc", 2)); // Output: 8
