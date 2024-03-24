class Solution:
    def __init__(self):
        self.inStack = []
        self.outStack = []
    def push(self, x):
        self.inStack.append(x)
    def pop(self):
        if not self.outStack:
            while self.inStack:
                self.outStack.append(self.inStack.pop())
            return self.outStack.pop()
    def peek(self):
        if not self.outStack:
            while self.inStack:
                self.outStack.append(self.inStack.pop())
            return self.outStack[-1]
    def empty(self):
        return not self.inStack and not self.outStack
    def get_queue(self):
        tempOut = self.outStack[::-1] 
        tempIn = self.inStack[:]
        return tempOut + tempIn
    
operations = ["MyQueue", "push", "push", "peek", "pop", "empty"]
values = [[],[1],[2],[],[]]
myQueue = None

for oper,val in zip(operations, values):
    if oper == "MyQueue":
        myQueue = Solution()
    elif oper == "push":
        myQueue.push(val[0])
    elif oper == "peek":
        peeked = myQueue.peek()
    elif oper == "pop":
        popped = myQueue.pop()
    elif oper == "empty":
        isEmpty = myQueue.empty()
    print("Current Queue:", myQueue.get_queue())