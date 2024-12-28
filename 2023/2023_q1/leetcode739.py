#  매일 온도가 주어지고 i번 째 날의 온도보다 더 따뜻해지기까지 며칠을 기다려야 하는지 구한 그 배열을 반환하는 문제

def dailyTemperatures(temperatures):
    ans = [0] * len(temperatures)
    stack = []
    for i in range(len(temperatures)):
        while stack and temperatures[i] > temperatures[stack[-1]]: #temperatures[stack[i]]와 stack[i]차이?
            j = stack.pop()
            ans[j] = i - j
        stack.append(i)
    return ans


print(dailyTemperatures([73,74,75,71,69,72,76,73])) #[1, 1, 4, 2, 1, 1, 0, 0]
print(dailyTemperatures([30,40,50,60])) #[1, 1, 1, 0]
print(dailyTemperatures([30,60,90])) #[1,1,0]