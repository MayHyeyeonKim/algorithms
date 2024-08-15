/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let charCount = {}; //각 문자의 빈도를 저장할 객체 charCount를 생성
    let length = 0; //팰린드롬의 길이를 저장할 변수 length를 0
    let hasOdd = false; //홀수 빈도를 가진 문자가 있는지 여부를 저장할 hasOdd 변수를 false로 초기화

    // 각 문자의 빈도를 계산
    for (let char of s) { //문자열 s의 각 문자를 순회하며, 해당 문자의 빈도를 charCount 객체에 저장
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // 팰린드롬 길이 계산
    for (let count of Object.values(charCount)) {
        if (count % 2 === 0) {
            length += count;
        } else {
            length += count - 1;
            hasOdd = true;
        }
    }
    //charCount 객체에 저장된 각 문자의 빈도를 순회. 만약 빈도가 짝수라면, 해당 문자를 모두 팰린드롬에 사용할 수 있으므로 length에 그 값을 더함.
    //빈도가 홀수인 경우, 팰린드롬의 양쪽에 동일한 개수만큼 배치할 수 있으므로 count - 1을 length에 더함. 또한, hasOdd를 true로 설정하여 홀수 빈도를 가진 문자가 있음을 표시함.
    // for (let char in charCount) {
    //     let count = charCount[char];
    //         if (count % 2 === 0) {
    //             length += count;
    //         } else {
    //             length += count - 1;
    //             hasOdd = true;
    //         }
    //     }



    // 홀수 문자가 있으면 중앙에 배치할 수 있으므로 길이를 1 증가
    if (hasOdd) {
        length += 1;
    }
    //만약 홀수 빈도를 가진 문자가 있다면, 팰린드롬의 중앙에 하나를 배치할 수 있으므로 length를 1 증가

    return length;
};
