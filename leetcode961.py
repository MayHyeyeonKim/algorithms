class Solution:
    def repeatedNTimes(self, A: List[int]) -> int:
        count = {}
        for num in A:
            if num in count:
                count[num] += 1
            else:
                count[num] = 1
        for key, value in count.items():
            if value > 1:
                return key
