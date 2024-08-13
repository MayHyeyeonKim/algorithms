/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let letterCount = {};

    // magazine의 각 문자를 해시맵에 저장
    for (let char of magazine) {
        letterCount[char] = (letterCount[char] || 0) + 1;
    }

    // ransomNote의 각 문자가 magazine에 충분히 있는지 확인
    for (let char of ransomNote) {
        if (!letterCount[char] || letterCount[char] <= 0) {
            return false; // 필요한 문자가 없거나 부족하면 false 반환
        }
        letterCount[char]--; // 사용한 문자 수를 감소
    }

    return true; // 모든 문자를 사용할 수 있으면 true 반환
};
