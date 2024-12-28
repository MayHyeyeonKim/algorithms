class Solution:
    def longestConsecutive(self, nums) -> int:
        # Time Complexity가 O(n)이어야 한다.
        # 예외 상황 체크: nums가 텅 비었냐? 비었으면 0 반환하자 (연속된 시퀀스가 없으니까)
        # nums에 중복을 제거하기 위해서 set 자료형으로 변환
        # 가장 긴 연속된 시퀀스 저장할 변수 초기화 longest_streak
        # nums의 요소들을 돌며 숫자 확인하며
            # 만약, 현재 바라보고 있는 요소가 set_nums안에서 제일 첫번째 숫자인지 확인한다
                # 현재 바라보고 있는 요소를 current_num으로 설정한다
                # 현재 연속된 시퀀스의 길이를 +1 해준다 current_streak
            # 현재 바라보고 있는 요소의 다음 숫자가 set_nums안에 있는 동안,
                # 아까 설정해준 current_num을 +1
                # 아까 설정해준 current_streak +1
            #longest_streak = longest_streak와 current_streak중 max가 되어 갱신!
        #  return longest_streak

        if not nums:
            return 0

        set_nums = set(nums)
        longest_streak = 0

        for num in set_nums:
            if num - 1 not in set_nums:
                current_num = num
                current_streak = 1

                while current_num + 1 in set_nums:
                    current_num += 1
                    current_streak += 1

                longest_streak = max(longest_streak, current_streak)

        return longest_streak

solution = Solution()
nums = [100,4,200,1,3,2]
result = solution.longestConsecutive(nums)
print(result)