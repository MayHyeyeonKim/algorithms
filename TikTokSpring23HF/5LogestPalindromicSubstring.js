// 5. Longest Palindromic Substring

// 두 포인터를 사용하는 "확장" 방식

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s; // 문자열이 1글자거나 비어있다면 그대로 반환

  let start = 0,
    end = 0;

  // 팰린드롬을 찾는 함수 (중심 확장)
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1; // 길이를 반환
  }

  for (let i = 0; i < s.length; i++) {
    // 한 글자 중심 팰린드롬과 두 글자 중심 팰린드롬을 확인
    let len1 = expandAroundCenter(i, i); // 홀수 길이 팰린드롬
    let len2 = expandAroundCenter(i, i + 1); // 짝수 길이 팰린드롬
    let maxLen = Math.max(len1, len2);

    if (maxLen > end - start) {
      start = i - Math.floor((maxLen - 1) / 2);
      end = i + Math.floor(maxLen / 2);
    }
  }

  return s.substring(start, end + 1);
};

// 예시 테스트
console.log(longestPalindrome("babad")); // 출력: "bab" 또는 "aba"
console.log(longestPalindrome("cbbd")); // 출력: "bb"
