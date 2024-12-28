class Solution:
    def combinationSum(self, candidates, target):
        result, nums = [], []

        def dfs(start, total):
            if total > target:
                return
            if total == target:
                result.append(nums[:])
            for i in range(start, len(candidates)):
                num = candidates[i]
                nums.append(num)
                dfs(i, total + num)
                nums.pop()

        dfs(0,0)    
        return result

sol = Solution()
candidates = [2,3,6,7] 
target = 7

result = sol.combinationSum(candidates, target)
print(result)

# candidates의 target승
# TC: O(c^t)
# SC: O(t)