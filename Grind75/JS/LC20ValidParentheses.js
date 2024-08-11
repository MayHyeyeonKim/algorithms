function isValid(s) {
    const stack = [];
    const matchingBrackets = {
        ")": "(",
        "}": "{",
        "]": "[",
    };

    for (let char of s) {
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else if (char === ")" || char === "}" || char === "]") {
            if (stack.pop() !== matchingBrackets[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// 예제 사용
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true


//카운터 어프로치
// var isValid = function(s) {
//     let parenthesesCount = 0;
//     let curlyBracesCount = 0;
//     let squareBracketsCount = 0;

//     for (let char of s) {
//         if (char === '(') {
//             parenthesesCount++;
//         } else if (char === ')') {
//             parenthesesCount--;
//             if (parenthesesCount < 0) return false;
//         } else if (char === '{') {
//             curlyBracesCount++;
//         } else if (char === '}') {
//             curlyBracesCount--;
//             if (curlyBracesCount < 0) return false;
//         } else if (char === '[') {
//             squareBracketsCount++;
//         } else if (char === ']') {
//             squareBracketsCount--;
//             if (squareBracketsCount < 0) return false;
//         }
//     }

//     return parenthesesCount === 0 && curlyBracesCount === 0 && squareBracketsCount === 0;
// };

//([)]"와 같은 경우, 열림 괄호 (와 닫힘 괄호 )의 개수는 맞지만, 순서가 맞지 않기 때문에 이 코드는 잘못된 결과를 반환