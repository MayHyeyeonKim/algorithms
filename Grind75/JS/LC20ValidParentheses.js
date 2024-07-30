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
