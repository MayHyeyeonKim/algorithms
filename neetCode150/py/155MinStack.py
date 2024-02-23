class MinStack:
    def __init__(self):
        self.stack = []
        self.MinStack = []
    def push(self, val):
        self.stack.append(val)
        val = min(val, self.MinStack[-1] if self.MinStack else val)
        self.MinStack.append(val)
    def pop(self):
        self.stack.pop()
        self.MinStack.pop()
    def top(self):
        return self.stack[-1]
    def getMin(self):
        return self.MinStack[-1]

# ["MinStack","push","push","push","getMin","pop","top","getMin"]
# [[],[-2],[0],[-3],[],[],[],[]]
    
stack = MinStack()
stack.push(-2)
stack.push(0)
stack.push(-3)
print(stack.getMin())  # -3
stack.pop()
print(stack.top())      # 0
print(stack.getMin())   # -2


# top returns the top element of the stack without removing it, while pop removes and returns the top element of the stack.