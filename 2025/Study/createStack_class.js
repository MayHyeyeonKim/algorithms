// constructor()는 클래스가 생성될 떋 실행되는 초기화 메서드

// this.stack은 "지금 생성 중인 Stack 인스턴스의 stack 속성"을 뜻함.
// 즉, const s = new Stack(); 했을 때 s.stack을 말하는 거

class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    return this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.pop();
s.peek();
s.isEmpty();

console.log(s.peek());
console.log(s.isEmpty());
