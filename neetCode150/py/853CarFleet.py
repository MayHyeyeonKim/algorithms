class Solution:
    def carfleet(self, position, speed, target):
        times = [(target-pos)/spd for pos, spd in sorted(zip(position, speed))]
        print(times) #[12.0, 3.0, 7.0, 1.0, 1.0] sorted하면 인덱스[0]인 position을 소팅 이렇게->[0,1],[3,3],[5,1],[8,4],[10,2] 그리고 이걸 공식대입해서 계산하면 도달하는게 걸리는 시간
        res = 1
        currentTime = times[-1]
        for time in times[::-1]: #12,3,7,1,1에서 맨 끝요소부터 반대로 돌꺼다. 7은 목적지까지 총7번쪼개서가고 3은 3번쪼개서가니 3이 7을 따라잡는다
            if time > currentTime: # time은 3일 때 7이 currentTime일테니 if절 못 타고 
                res += 1
            currentTime = max(currentTime, time) # 여기로 넘어와서 max는 여전히 7
        return res
# time이 12일 때는 목적지까지 12번 쪼개서 가니 얼마나 느리겠어.
# if절을 타면 time인 12가 currentTime보다 느리니(즉, 12 > 7) res에 1을 해준다.

target = 12
position = [10,8,0,5,3]
speed = [2,4,1,1,3]
sol = Solution()
print(sol.carfleet(position, speed, target))

# 위의 코드에서 보면 제일 마지막요소를 currentTime에 time[-1]를 담았던거를 res = currentTime = 0으로 res에 그냥 담아버려도 된다.
# 그럼 for loop안에서 currentTime의 max값을 계속 갱신하지 않고, if를 돌때마다 currentTime에 현재 time을 갱신하면 currentTime = max(currentTime, time) 이 단계를 줄일 수 있다.

# def carFleet(self, target, position, speed):
#         times = [(target - p) / s for p, s in sorted(zip(position, speed))]
#         res = currentTime = 0
#         for time in times[::-1]:
#             if time > currentTime:
#                 res += 1
#                 currentTime = time
#         return res