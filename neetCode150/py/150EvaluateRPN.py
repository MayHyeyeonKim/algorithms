class Solution:
    def evalRPN(self, tokens):
        stack = []
        operators = set(["+", "-", "*", "/"])

        for token in tokens:
            if token not in operators:
                stack.append(int(token))
            else:
                operand2 = stack.pop()
                operand1 = stack.pop()
                if token == "+":
                    stack.append(operand1+operand2)
                elif token == "-":
                    stack.append(operand1-operand2)
                elif token == "*":
                    stack.append(operand1*operand2)
                elif token == "/":
                    stack.append(int(operand1/operand2))
        return stack.pop()
    
s = Solution()
tokens = ["2", "1", "+", "3", "*"]
print(s.evalRPN(tokens))  # Output: 9
