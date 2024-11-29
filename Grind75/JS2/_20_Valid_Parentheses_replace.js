var isValid = function (s) {
  let prevLength;
  do {
    prevLength = s.length;
    s = s.replace("()", "").replace("{}", "").replace("[]", ""); //replace 메서드는 문자열에서 첫 번째로 일치하는 패턴만 찾아 교체
  } while (s.length !== prevLength);
  return s.length === 0;
};

s = "(){][]";
s1 = "({[]})";
console.log(isValid(s1));
