#두 개의 스택을 사용해서 큐 구현
#큐 - 선입선출 맛집줄서기
#스택 - 브라우저뒤로가기버튼
#스택 두 개로 구현하려면 들어온 데이터를 스택1에 삽입, 데이타추출은 스택2

class MyQ:
    def __init__(self):
        self.stack1 = []
        self.stack2 = []
    
    def push(self,x):
        self.stack1.append(x)
    
    def pop(self):
        self.peek() #단순엿보기할 때는 peek메소드
        return self.stack2.pop()
    
    def peek(self):
        if not self.stack2:
            while self.stack1:
                self.stack2.append(self.stack1.pop())
        return self.stack2[-1]

    def empty(self):
        return not self.stack1 and not self.stack2