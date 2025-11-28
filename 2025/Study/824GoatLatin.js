// 824. Goat Latin

/**
 * 이 문제 기억나. 나  JS 첫 수업에 이 문제 풀라고 했는데 못 풀었지.
 * 그땐 답 써달라고 해서 그 코드 달달 외웠는데 이제는 내 힘으로 풀쥐 훗
 */

const toGoatLatin = (sentence) => {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const words = sentence.split(" ");
  const goatLatinWords = words.map((word, index) => {
    let goatWord = "";
    if (vowels.has(word[0])) {
      goatWord = word + "ma";
    } else {
      goatWord = word.slice(1) + word[0] + "ma";
    }
    goatWord += "a".repeat(index + 1);
    return goatWord;
  });
  return goatLatinWords.join(" ");
};
console.log(toGoatLatin("I speak Goat Latin")); // "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
console.log(toGoatLatin("The quick brown fox jumped over the lazy dog")); // "heTmaa uickqmaaa ownbrmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
console.log(toGoatLatin("Each word consists of lowercase and uppercase letters only")); // "Eachmaa ordwmaaa onsistscmaaaa ofmaaaaa owercaselmaaaaaa andmaaaaaaa uppercasemaaaaaaaa etterslmaaaaaaaaaa onlymaaaaaaaaaa"
