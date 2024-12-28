package Grind75.java;

import java.util.Stack;

public class ImplementQueueusingStacks {
    public static void main(String[] args) {
        MyQueue myQueue = new MyQueue();

        // 큐에 원소 추가
        myQueue.push(1);
        myQueue.push(2);
        myQueue.push(3);

        // 큐에서 원소 조회 및 삭제
        System.out.println("Peek: " + myQueue.peek());  // Output: 1
        System.out.println("Pop: " + myQueue.pop());    // Output: 1

        // 큐가 비어 있는지 확인
        System.out.println("Is Empty: " + myQueue.empty());  // Output: false

        // 나머지 원소들 조회 및 삭제
        System.out.println("Pop: " + myQueue.pop());    // Output: 2
        System.out.println("Pop: " + myQueue.pop());    // Output: 3

        // 큐가 비어 있는지 확인
        System.out.println("Is Empty: " + myQueue.empty());  // Output: true
    }

    static class MyQueue {
        Stack<Integer> in = new Stack<>();
        Stack<Integer> out = new Stack<>();

        public MyQueue() {
        }

        public void push(int x) {
            in.push(x);
        }

        public int pop() {
            peek();
            return out.pop();
        }

        public int peek() {
            if (out.isEmpty()) {
                while (!in.isEmpty()) {
                    out.push(in.pop());
                }
            }
            return out.peek();
        }

        public boolean empty() {
            return out.isEmpty() && in.isEmpty();
        }
    }
}
