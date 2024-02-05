#leetcode509_declarative.py
def fib(n):
    if n <=1:
        return n
    return fib(n-1) + fib(n-2)

#이렇게 하면 함수가 호출될 때마다 연산이 2번씩 발생하기 때문에 2^n의 시간복잡도를 가짐. 느림.