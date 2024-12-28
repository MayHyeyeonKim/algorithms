class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        return len(set([num for num in nums if num > 0]))
        # 주어진 nums 리스트에서 0보다 큰 값들의 개수를 세고,
        # 중복된 값들을 제외한 유일한 값들의 개수를 구한다.
        # 이를 통해 연산의 최소 횟수를 계산하고 반환함.

        return len(set(nums)) - nums.count(0)
        # 중복을 제거한 유일한 값들의 개수에서 값이 0인 요소의 개수를 뺀 결과를 반환함.
        # 이 값은 0보다 큰 유일한 값들의 개수를 나타내며, 연산의 최소 횟수를 나타낸다.

        return len(set(nums)) - (0 in nums)
        # 고유한 요소의 개수에서 0이 포함되어 있는지 여부에 따라 0을 제외한 최소 연산 횟수를 계산한다.
        # 0이 nums 리스트에 포함되어 있다면 (0 in nums)는 1이 되고,
        # 0이 포함되어 있지 않다면 (0 in nums)는 0이 됨.
        # 따라서, 0을 제외한 최소 연산 횟수는 고유한 요소의 개수에서 0의 포함 여부에 따라서 1이 차감되거나 차감되지 않게 됨.
