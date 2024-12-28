class Solution:
    def jump(self, nums):
        jumps = 0       # 점프 횟수를 저장
        current_end = 0 # 현재 점프가 도달할 수 있는 최대 인덱스
        farthest = 0    # 현재 위치에서 갈 수 있는 가장 먼 인덱스
        
        for i in range(len(nums) - 1):
            farthest = max(farthest, i + nums[i]) # i위치에서 가장 먼 위치
            
            #  그리디 알고리즘의 핵심 개념 (점프 횟수를 최소화하면서 목표 지점에 도달)
            if i == current_end: # 현재 점프 범위의 끝에 도달했을 때
                jumps += 1
                current_end = farthest
                
                if current_end >= len(nums) - 1: # 배열의 끝이나 그 이상이면 반복 종료
                    break
                    
        return jumps

nums = [2,3,1,1,4]
sol = Solution()
result = sol.jump(nums)
print(result)