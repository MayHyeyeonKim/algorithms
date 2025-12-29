// 3164. Find the Number of Good Pairs II

// review again!

// const count = new Map();
// let left = 0;
// let maxLen = 0;

// for (let right = 0; right < s.length; right++) {
//   const ch = s[right];
//   count.set(ch, (count.get(ch) || 0) + 1);

//   // 어떤 문자가 3번 이상이면 창문 줄이기
//   while (count.get(ch) > 2) {
//     const leftChar = s[left];
//     count.set(leftChar, count.get(leftChar) - 1);
//     left++;
//   }

//   maxLen = Math.max(maxLen, right - left + 1);
// }

// return maxLen;
