// 1647. Minimum Deletions to Make Character Frequencies Unique

/**
 * 
 * @param {*} s
 * 
 * 
1. 각 문자의 등장 횟수를 세어 빈도 배열을 만든다.
2. 빈도 배열을 내림차순 정렬한다.
3. 현재 빈도가 이미 사용된 빈도라면 줄여서 고유한 값을 만들고, 삭제 횟수를 센다.
4. 고유한 빈도 집합을 유지하면서 충돌을 피하도록 만든다.
 *  
 */

var minDeletions = function (s) {
  let freq = new Array(26).fill(0);

  for (let char of s) {
    freq[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  freq.sort((a, b) => b - a);

  let deletions = 0;
  const seen = new Set();

  for (let f of freq) {
    while (f > 0 && seen.has(f)) {
      f--;
      deletions++;
    }
    if (f > 0) seen.add(f);
  }
  return deletions;
};

console.log(minDeletions("aaabbbcc")); // 2
