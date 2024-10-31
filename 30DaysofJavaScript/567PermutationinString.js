// 567. Permutation in String
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion = function (s1, s2) {
  let f1 = new Array(26).fill(0);
  let f2 = new Array(26).fill(0);
  let f3 = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    f1[s1.charCodeAt(i) - 97]++;
    f2[s2.charCodeAt(i) - 97]++;
  }
  let matches = 0;
  for (let i = 0; i < 26; i++) {
    if (f1[i] == f2[i]) {
      f3[i] = 1;
      matches++;
    }
  }
  for (let i = s1.length; i < s2.length; i++) {
    if (matches == 26) return true;
    let tlli = s2.charCodeAt(i - s1.length) - 97;
    let trli = s2.charCodeAt(i) - 97;
    f2[tlli]--;
    f2[trli]++;

    if (tlli == trli) continue;
    if (f1[tlli] == f2[tlli]) {
      f3[tlli] = 1;
      matches++;
    } else if (f3[tlli] == 1) {
      f3[tlli] = 0;
      matches--;
    }
    if (f1[trli] == f2[trli]) {
      f3[trli] = 1;
      matches++;
    } else if (f3[trli] == 1) {
      f3[trli] = 0;
      matches--;
    }
  }
  return matches == 26;
};
