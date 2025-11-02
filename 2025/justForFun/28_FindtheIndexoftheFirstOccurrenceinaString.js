// 28. Find the Index of the First Occurrence in a String

const strStr = (haystack, needle) => {
  if (needle === "") {
    return 0;
  }

  const needleLength = needle.length;
  const haystackLength = haystack.length;

  for (let i = 0; i <= haystackLength - needleLength; i++) {
    if (haystack.substring(i, i + needleLength) === needle) {
      return i;
    }
  }
  return -1;
};

console.log(strStr("sadbutsad", "sad")); // Output: 0
console.log(strStr("leetcode", "leeto")); // Output: -1
