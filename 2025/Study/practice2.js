//배열에서 중복 제거 함수 - set을 사용하던가 아님 filter를 사용하기 (그 요소가 처음나온 시점과 현재 인덱스를 비교해서 같으면 반환)

const arr = [1, 2, 2, 3, 4];
let removeDuplicates = (arr) => [...new Set(arr)];

// console.log(removeDuplicates(arr));

const removeDuplicates2 = (arr) => arr.filter((item, index) => arr.indexOf(item) === index);
// console.log(removeDuplicates2(arr));

// 문제: "({[]})" → true, "({[})" → false

function isValid(s) {
  const stack = [];
  const closeToOpen = { ")": "(", "}": "{", "]": "[" };

  for (let c of s) {
    if (["(", "{", "["].includes(c)) {
      stack.push(c);
    } else {
      if (stack.pop() != closeToOpen[c]) return false;
    }
  }
  return stack.length === 0;
}

const s = "())";
console.log(isValid(s));
