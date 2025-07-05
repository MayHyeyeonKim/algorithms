// 1239. Maximum Length of a Concatenated String with Unique Characters

var maxLength = function (arr) {
  let max = 0;

  const isUnique = (str) => new Set(str).size === str.length; //중복된 문자가 있는지 확인하는 함수

  const dfs = (i, current) => {
    //current: 지금까지 이어붙인 문자열
    if (!isUnique(current)) return;
    max = Math.max(max, current.length);

    for (let j = i; j < arr.length; j++) {
      //현재 인덱스 i부터 끝까지 순회하며 가능한 문자열을 선택
      dfs(j + 1, current + arr[j]); //문자열을 이어붙이고 다음 인덱스로 재귀 호출
    }
  };
  dfs(0, "");
  return max;
};

console.log(maxLength(["un", "iq", "ue"])); // 4
