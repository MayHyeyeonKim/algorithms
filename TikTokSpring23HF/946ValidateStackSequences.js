var validateStackSequences = function (pushed, popped) {
  let stack = []; // 스택 역할을 할 배열
  let i = 0; // popped 배열을 확인할 인덱스

  // pushed 배열의 값을 하나씩 처리
  for (let val of pushed) {
    stack.push(val); // push 연산
    // 스택의 맨 위 값이 popped[i]와 같으면 pop
    while (stack.length > 0 && stack[stack.length - 1] === popped[i]) {
      stack.pop();
      i++;
    }
  }

  // 스택이 비어 있으면 올바른 순서, 아니면 잘못된 순서
  return stack.length === 0;
};
