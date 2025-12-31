// 682. Baseball Game

/**
function calPoints(operations) {
    const stack = [];

    for (const op of operations) {
        if (op === "C") {
        stack.pop();
        } else if (op === "D") {
        stack.push(stack[stack.length - 1] * 2);
        } else if (op === "+") {
        const a = stack[stack.length - 1];
        const b = stack[stack.length - 2];
        stack.push(a + b);
        } else {
        stack.push(Number(op));
        }
    }

    return stack.reduce((a, b) => a + b, 0);
 */
