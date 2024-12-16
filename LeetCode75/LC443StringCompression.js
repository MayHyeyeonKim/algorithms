// 443. String Compression
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let write = 0; // 압축 결과를 쓸 위치
  let read = 0; // 원본 문자열을 읽을 위치

  while (read < chars.length) {
    const char = chars[read];
    let count = 0;

    // 동일한 문자 그룹 계산
    while (read < chars.length && chars[read] === char) {
      read++;
      count++;
    }

    // 문자를 배열에 기록
    chars[write] = char;
    write++;

    // 반복 횟수가 1 이상이면 기록
    if (count > 1) {
      for (const digit of String(count)) {
        chars[write] = digit;
        write++;
      }
    }
  }

  return write; // 최종 압축 문자열의 길이
};
