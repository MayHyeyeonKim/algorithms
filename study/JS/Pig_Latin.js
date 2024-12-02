/**
Intro
To solve this challenge, feel free to use any and all resources available to you. Once you start the exercise, you’ll have two hours to complete and submit your solution.

Challenge - Pig Latin
Pig Latin is a farcical “language” used to entertain children, but also to teach them some valuable language concepts along the way. Translating English to Pig Latin is simple:

Take the first consonant (or cluster of consonants) of a word, move it to the end of the word, and add a suffix of “ay”
If a word begins with a vowel, just add “way” at the end
For the sake of readability, separate the Pig Latin-ized parts of the word with a dash -
Your challenge is to implement the method pigLatinize that takes a string phrase and translates it to Pig Latin. You’re free to add additional classes, variables, and methods if you would like.

The input phrase could be as short as a single word, or as long as multiple sentences or paragraphs. Whitespace, capitalization, and punctuation should be honored and maintained in your final answer.

Examples
“pig” => “ig-pay”
“pig latin” => “ig-pay atin-lay”
“Pig Latin” => “ig-Pay atin-Lay”
 */

/**
    1. 문장을 단어랑 특수문자로 나눈다
    2. 각 단어의 규칙에 따라 변한다
        모음시작: -way
        자음시작: 자음-ay
    3. 원래 단어의 대소문자 유지
    4. 특수문자나 공백은 변환하지 않고 그대로 둔다
    5. 변환된 단어와 특수문자를 합쳐 새 문장을 만들어 반환한다.

    입력: "Pig Latin!"

    나누기: ["Pig", " ", "Latin", "!"]
    "Pig" → "ig-Pay", "Latin" → "atin-Lay"
    합치기: "ig-Pay atin-Lay!"
    결과: "ig-Pay atin-Lay!"
 */

function pigLatinize(phrase) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  // 단어를 변환하는 함수
  function transformWord(word) {
    // 모음으로 시작하면 "-way" 추가
    if (vowels.includes(word[0])) {
      return word + "-way";
    }

    // 첫 자음 클러스터를 찾아 뒤로 이동
    let i = 0;
    while (i < word.length && !vowels.includes(word[i])) {
      //pig
      i++;
    }
    const consonantCluster = word.slice(0, i); // 첫 자음들 p
    const rest = word.slice(i); // 나머지 단어 ig
    return rest + "-" + consonantCluster + "ay"; //ig-pay
  }

  // 문장을 단어와 특수문자로 나누기
  const tokens = phrase.match(/\w+|[^\w\s]/g) || [];
  const result = tokens.map((token) => {
    if (/^[a-zA-Z]+$/.test(token)) {
      // 단어만 변환
      const transformed = transformWord(token);
      // 대소문자 유지
      if (token[0] === token[0].toUpperCase()) {
        return (
          transformed.charAt(0).toUpperCase() +
          transformed.slice(1).toLowerCase()
        );
      }
      return transformed;
    }
    return token; // 특수문자는 그대로
  });

  return result.join("");
}

// 테스트
console.log(pigLatinize("pig")); // "ig-pay"
console.log(pigLatinize("Pig Latin!")); // "Ig-Pay Atin-Lay!"
console.log(pigLatinize("apple pie.")); // "apple-way ie-pay."
