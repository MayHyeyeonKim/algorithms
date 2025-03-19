// 문제 3: 회문(Palindrome) 만들기

function makePalindrome(str) {
  let cleanStr = str.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase();
  if (cleanStr === cleanStr.split("").reverse().join("")) return str;
  //만약 palindrome이 아니면 추가할 최소한의 문자를 찾아서 붙여 팰린드롬을 만든다.
  for (let i = 0; i < cleanStr.length; i++) {
    let suffix = cleanStr.slice(i);
    let reversedSuffix = suffix.split("").reverse().join("");
    if (suffix === reversedSuffix) {
      let missingPart = cleanStr.slice(0, i).split("").reverse().join("");
      return str + missingPart;
    }
  }
  return str;
}

let str = "race";
console.log(makePalindrome(str));
