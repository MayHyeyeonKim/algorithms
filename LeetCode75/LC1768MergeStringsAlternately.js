/**
 * 
1. word1과 word2를 번갈아가며 한 글자씩 더한다.
2. 두 문자열 중 더 긴 문자열이 남았을 경우, 남은 부분을 붙인다.
3. 최종적으로 만들어진 문자열을 반환한다.
 */

var mergeAlternately = function(word1, word2){
    let merged = '';
    let i = 0;
    let j = 0;
    while(i < word1.length || j < word2.length){
        if(i < word1.length) {
            merged += word1[i++];
        }
        if(j < word2.length){
            merged += word2[j++]
        }
    }
    return merged
}

console.log(mergeAlternately("abcdefg", "123"))