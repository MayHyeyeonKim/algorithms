//create stack!

// function createStack()
function createStack() {
  const stack = [];

  return {
    push: (item) => stack.push(item),
    pop: () => stack.pop(),
    peek: () => stack[stack.length - 1],
    isEmpty: () => stack.length === 0,
  };
}

s = createStack();
s.push(1);
s.push(2);
s.push(9);
s.pop();
s.peek();

console.log(s.peek());

// 아! obj.key하면 그 값에 접근할 수 있으니까 객체 리터럴로 바로 접근할 수 있는 거구나!
