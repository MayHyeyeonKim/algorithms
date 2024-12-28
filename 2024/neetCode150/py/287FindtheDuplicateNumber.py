class Solution:
    def findDuplicate(self, nums):
        # Find cycle
        slow = nums[0]
        fast = nums[0]

        while True:
            slow = nums[slow]
            fast = nums[nums[fast]]
            if slow == fast:
                break

        # Find starting point of cycle
        slow = nums[0]
        while slow != fast:
            slow = nums[slow]
            fast = nums[fast]

        return slow

nums = [2,9,7,6,2]
sol = Solution()
result = sol.findDuplicate(nums)
print(result)
