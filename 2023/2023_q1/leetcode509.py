def fib(n):
    if n == 0:
        return 0
    elif n ==1:
        return 0
    else:
        prev_prev = 0
        prev = 1
        for i in range(2,n+1):
            current = prev + prev_prev
            prev_prev = prev
            prev = current
        return current
        
n=9
print(fib(n))