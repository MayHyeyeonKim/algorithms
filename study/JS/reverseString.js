(function revStr(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed; //새로운 char가 항상 기존의 reversed 문자열 앞에 추가됩니다. 이 과정이 문자열을 뒤집는 핵심
  }
  console.log({ reversedVal: reversed });
})("Greeting!");

// iiff 즉시실행함수
// Immediately Invoked Function Expression (IIFE)
