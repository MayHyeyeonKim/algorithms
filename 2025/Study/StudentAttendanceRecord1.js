// 551 Student Attendance Record I

const checkRecord = (s) => {
  let absentCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      absentCount++;
      if (absentCount > 1) return false;
    }
    if (i >= 2 && s[i] === "L" && s[i - 1] === "L" && s[i - 2] === "L") {
      return false;
    }
  }
  return true;
};

console.log(checkRecord("PPALLP")); // true
console.log(checkRecord("PPALLL")); // false
console.log(checkRecord("PAAPPP")); // false
console.log(checkRecord("PAPAP")); // true
console.log(checkRecord("LLLL")); // false
