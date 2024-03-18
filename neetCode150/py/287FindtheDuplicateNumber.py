class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        visited = set()
        for ele in nums:
            if ele in visited:
                return ele
            visited.add(ele)