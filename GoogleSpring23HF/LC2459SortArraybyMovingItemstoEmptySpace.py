class Solution:
    def sortArray(self, nums: List[int]) -> int:
        
        def process(nums,final_zero_idx):
            res = 0
            idxs = {v:i for i,v in enumerate(nums)}
            process_idx = 1 if final_zero_idx==0 else 0
            # 현재 0의 위치를 인덱스 i로 바꾸는 역할 - 이때마다 res(작업 횟수)를 1씩 증가
            def swap_zero_to(i):
                nonlocal res
                num = nums[i]
                zero_idx = idxs[0]
                nums[zero_idx],nums[i]=nums[i],nums[zero_idx]
                idxs[num],idxs[0]=zero_idx,i
                res+=1
            # offset을 사용하여 0이 어디에 위치해야 하는지를 결정
            offset = 0 if final_zero_idx==0 else 1

            while True:
                num = idxs[0]+offset # the number to swap with zero
                if idxs[0] != final_zero_idx: 
                    swap_zero_to(idxs[num])
                else: # cannot swap zero if zero is at final_zero_idx
                    # swap the first number that isn't on its final position
                    while process_idx<len(nums) and nums[process_idx]==process_idx+offset:
                        process_idx+=1
                    if process_idx==len(nums)-offset:
                        return res
                    swap_zero_to(idxs[nums[process_idx]])
            return res
        return min(process(nums[:],0),process(nums[:],len(nums)-1))

# final_zero_idx는 0이 끝날 위치를 의미(0이 맨 앞 또는 맨 뒤)
# res는 작업 횟수
# idxs는 {v:i for i,v in enumerate(nums)}  배열의 각 값과 해당 인덱스를 매핑하는 딕셔너리
# process_idx = 1 if final_zero_idx==0 else 0  process_idx는 현재 처리 중인 숫자의 인덱스
# nums[:]는 nums의 전체 복사본
# min(process(nums[:],0) 이 호출은 0이 배열의 시작 위치에 있을 때
# process(nums[:], len(nums) - 1): 이 호출은 0이 배열의 끝 위치에 있을 때, 배열을 정렬하는 데 필요한 최소 작업 수를 계산합니다.