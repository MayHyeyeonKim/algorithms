//문제 1: 단어의 길이를 기준으로 정렬하기
//알파벳과 공백만 남긴 후 각 단어를 길이순으로 오름차순 정렬하시오

function sortByWordLength(str) {
  let cleanStr = str.replace(/[^a-zA-Z0-9 ]/g, "");
  console.log("c=> ", cleanStr);
  return cleanStr
    .split(" ")
    .filter((word) => word.length > 0)
    .sort((a, b) => a.length - b.length)
    .join(" ");
}

let str = "Hello, my friend! How are you today?";
console.log(sortByWordLength(str));
