class VPS:
    def __init__(self, T):
        for i in range(T):
            stk = []
            isVPS = True
            for ch in input():
                if ch == '(':
                    stk.append(ch)
                else:
                    if stk:
                        stk.pop()
                    else:
                        isVPS = False
                        break
            if len(stk) > 0:
                isVPS = False
            print('YES' if isVPS else 'NO')

T = int(input())
VPS(T)
